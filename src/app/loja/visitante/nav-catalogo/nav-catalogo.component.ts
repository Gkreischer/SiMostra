import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from './../../compartilhados/login';

@Component({
  selector: 'app-nav-catalogo',
  templateUrl: './nav-catalogo.component.html',
  styleUrls: ['./nav-catalogo.component.css']
})
export class NavCatalogoComponent implements OnInit {

  constructor(private modalService: NgbModal, private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.montaForm();
  }

  formLogin: FormGroup;
  login: Login;

  montaForm(){
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  enviaForm(usuario: string, senha: string){
  this.login = this.formLogin.value;
  if(this.login.email === 'admin' && this.login.senha === 'password'){
    this.router.navigate(['/cadastropeca']);
  }
  }

  abreModalPainelAdm(conteudo){
    this.modalService.open(conteudo, { centered: true });
  }

  

}
