import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dadosContato } from './../loja/compartilhados/dadosContato';
import { CrudService } from '../loja/services/crud.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  constructor(private fb: FormBuilder, private crud: CrudService) {
    this.montaForm();
   }

  ngOnInit() {
  }

  formContato: FormGroup = null;
  dadosDoContato: dadosContato;

  erro: any;
  msg: string;

  montaForm(){
    this.formContato = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  enviaMensagem(){
    this.dadosDoContato = this.formContato.value;
    this.crud.criaRegistro('/contatos', this.dadosDoContato).subscribe((data) => {
      this.msg = 'Entraremos em contato o mais rápido possível. Obrigado!';
    }, error => {
      this.erro = error;
    });
  }


}
