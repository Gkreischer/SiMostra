import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Login } from './../../compartilhados/login';
import { Configuracao } from './../../compartilhados/configuracao';

import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-nav-catalogo',
  templateUrl: './nav-catalogo.component.html',
  styleUrls: ['./nav-catalogo.component.css'],
  providers: [NgbDropdownConfig]
})
export class NavCatalogoComponent implements OnInit {

  constructor(private modalService: NgbModal, private fb: FormBuilder,
    private router: Router, config: NgbDropdownConfig, private loginService: LoginService, private crud: CrudService) {
    config.placement = 'top-left';
    let token = this.loginService.estaLogado();

    if (token) {
      console.log('Token armazenado localmente');
      this.eAdministrador = true;
    } else {
      console.log('Usuario nao logado.')
    }
  }

  ngOnInit() {
    this.montaForm();
    this.pegaDadosLoja();
  }

  formLogin: FormGroup;
  dadosUsuario: Login;
  eAdministrador: boolean = false;
  dadosDaLoja: Configuracao = null;
  msg: string = null;
  erro = null;
  tituloLoja: string = null;

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

  deslogar() {
    this.loginService.logout();
    this.eAdministrador = false;
  }

  pegaDadosLoja() {
    let nomeLoja = localStorage.getItem('nomeDaLoja');

    if(!nomeLoja){
      this.crud.leRegistro('/configuracaos').subscribe((data) => {
        this.dadosDaLoja = data[0];
        console.table(this.dadosDaLoja);
        nomeLoja = this.dadosDaLoja.nomeFantasia;
        this.tituloLoja = JSON.stringify(localStorage.setItem('nomeDaLoja', nomeLoja));
      }, error => {
        this.erro = error;
        console.log('Nao foi possivel ler as configuraçoes da loja');
      })
    } else {
      this.tituloLoja = localStorage.getItem('nomeDaLoja');

    }
  }


}
