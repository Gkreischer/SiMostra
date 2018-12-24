import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PecaParaCadastro } from './../../compartilhados/cadastroPeca';

@Component({
  selector: 'app-cdpeca',
  templateUrl: './cdpeca.component.html',
  styleUrls: ['./cdpeca.component.css']
})
export class CdpecaComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    document.body.style.background = 'linear-gradient(to bottom, #aebfbc 22%,#99afab 33%,#8ea6a2 50%,#829d98 67%,#4e5c5a 82%,#0e0e0e 100%)';
   }

   formCadastroPeca: FormGroup = null;
   dadosPeca: PecaParaCadastro;
  ngOnInit() {
  }

  montaForm(){
    this.formCadastroPeca = this.fb.group({
      nome: ['', Validators.required],
      marca: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      linkImagem: ['', Validators.required],
      detalhes: ['', Validators.required]
    });
  }


}
