import { Component, OnInit } from '@angular/core';
import { Peca } from './../../compartilhados/peca';
import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';

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
  pecaConsultada:Peca = null;
  msg;
  erro;
  p: number = 1;
  destruido: ReplaySubject<boolean> = new ReplaySubject(1);


  ngOnInit() {
    window.document.body.style.backgroundColor = '#97CC04';
    this.montaForm();
  }

  montaForm() {
    this.formVisibilidade = this.fb.group({
      visivel: '',
    });
  }


  lePecas() {
    this.crud.leRegistro('/produtos').takeUntil(this.destruido).subscribe((data) => {
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

  alteraVisibilidade(event) {

    let confirma = window.confirm('Deseja esconder esse produto do catálogo para os seus clientes?');

    if (confirma) {
      let target = event.target || event.srcElement || event.currentTarget;
      let id = target.attributes.id.value;
      let valor = target.attributes.value.value;

      console.log(`Id da peca: ${id}`);
      console.log(`Valor antes do click em visibilidade: ${valor}`);

      this.crud.leRegistroEspecifico('/produtos', id).takeUntil(this.destruido).subscribe((data) => {
        this.pecaConsultada = data;

        if(this.pecaConsultada.visivel){
          this.pecaConsultada.visivel = false;
        } else {
          this.pecaConsultada.visivel = true;
        }

        console.log(`A peca consultada agora possui valor : ${this.pecaConsultada.visivel}`);

        this.executaAtualizacaoVisibilidade(id, this.pecaConsultada);
      });


    } else {
      console.log('Operação de visibilidade cancelada');
      return false;
    }

  }

  executaAtualizacaoVisibilidade(id, form){
    this.crud.atualizaRegistro('/produtos', id, form).takeUntil(this.destruido).subscribe((data) => {
      return console.log(data);
    }, error => {
      this.erro = error;
      console.log(this.erro);
    })
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

      this.crud.deletaRegistro('/produtos', id).takeUntil(this.destruido).subscribe((data) => {
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
  
  ngOnDestory(){
    this.destruido.next(true);
    this.destruido.complete();
  }

}
