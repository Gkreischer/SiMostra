import { Component, OnInit } from '@angular/core';
import { Peca } from './../../compartilhados/peca';
import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listagemdepecas',
  templateUrl: './listagemdepecas.component.html',
  styleUrls: ['./listagemdepecas.component.css']
})
export class ListagemdepecasComponent implements OnInit {

  constructor(private crud: CrudService, private route: Router, public fb: FormBuilder) {
    this.lePecas();
  }

  pecas: Peca[] = null;
  formVisibilidade: FormGroup = null;
  visibilidade: boolean = null;
  situacaoVisibilidadePecas = [];
  msg;
  erro;

  ngOnInit() {
    document.body.style.backgroundColor = '#007FC1';
    this.montaForm();
  }

  montaForm() {
    this.formVisibilidade = this.fb.group({
      visivel: '',
    });
  }


  lePecas() {
    this.crud.leRegistro('/produtos').subscribe((data) => {
      if (data.length == 0) {
        this.msg = 'Você não tem peças cadastradas';
      } else {
        this.pecas = data;
        console.table(this.pecas);
      }
    }, error => {
      this.erro = error;
    });

  }

  atualizaVisibilidade(event) {

    let confirma = window.confirm('Deseja esconder esse produto do catálogo para os seus clientes?');

    if (confirma) {
      let target = event.target || event.srcElement || event.currentTarget;
      let id = target.attributes.id.value;
      let valor = target.attributes.value.value;

      console.log(`Id da peca: ${id}`);
      console.log(`Valor antes do click em visibilidade: ${valor}`);


    } else {
      console.log('Operação de visibilidade cancelada');
      return false;
    }

  }



  editaPeca(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(`Id da peca: ${id}`);

    this.route.navigate([`/cadastropeca/${id}`]);

  }

  deletaPeca(event) {
    let confirma = window.confirm('Você realmente deseja deletar o produto?');

    if (confirma) {
      let target = event.target || event.srcElement || event.currentTarget;
      let id = target.attributes.id.value;

      this.crud.deletaRegistro('/produtos', id).subscribe((data) => {
        for (let i = 0; i < this.pecas.length; i++) {
          if (id === this.pecas[i].id) {
            this.pecas.splice(i, 1);
            console.table(this.pecas);
          }
        }
      }, error => {
        this.erro = error;
        console.log(this.erro);
      });
    } else {
      console.log('Operação deletar cancelada');
    }
  }



}
