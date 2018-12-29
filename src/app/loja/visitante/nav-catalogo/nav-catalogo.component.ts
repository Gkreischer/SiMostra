import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Login } from './../../compartilhados/login';

import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-catalogo',
  templateUrl: './nav-catalogo.component.html',
  styleUrls: ['./nav-catalogo.component.css'],
  providers: [NgbDropdownConfig]
})
export class NavCatalogoComponent implements OnInit {

  constructor(private modalService: NgbModal, private fb: FormBuilder,
    private router: Router, config: NgbDropdownConfig, private loginService: LoginService) {
      config.placement = 'top-left';
      let token = this.loginService.estaLogado();

      if(token){
        console.log('Token armazenado localmente');
        this.eAdministrador = true;
      }else {
        console.log('Usuario nao logado.')
      }
     }

  ngOnInit() {
    this.montaForm();
  }

  formLogin: FormGroup;
  dadosUsuario: Login;
  eAdministrador: boolean = false;

  msg: string = null;
  erro = null;

  montaForm() {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  enviaForm(usuario: string, senha: string) {
    this.dadosUsuario = this.formLogin.value;

    this.loginService.login(this.dadosUsuario).subscribe((data) => {
      console.log(`Usuario autenticado ${JSON.stringify(data)}`);
      this.modalService.dismissAll();
      this.eAdministrador = true;
    }, error => {
      this.erro = error;
      console.log(error);
      this.eAdministrador = false;
    });
  }

  abreModalPainelAdm(conteudo) {
    this.modalService.open(conteudo, { centered: true });
  }

  deslogar(){
    this.loginService.logout();
    this.eAdministrador = false;
  }



}
