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
     }

  ngOnInit() {
    this.montaForm();
  }

  formLogin: FormGroup;
  dadosUsuario: Login;

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
    }, error => {
      this.erro = error;
      console.log(`Erro na autenticação ${this.erro}`);
    });
  }

  abreModalPainelAdm(conteudo) {
    this.modalService.open(conteudo, { centered: true });
  }



}
