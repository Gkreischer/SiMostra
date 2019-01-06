import { Component, OnInit } from '@angular/core';
import { Peca } from './../../compartilhados/peca';
import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagemdepecas',
  templateUrl: './listagemdepecas.component.html',
  styleUrls: ['./listagemdepecas.component.css']
})
export class ListagemdepecasComponent implements OnInit {

  constructor(private crud: CrudService, private route: Router) {
    this.lePecas();
  }

  pecas: Peca[] = null;

  msg;
  erro;

  ngOnInit() {
    document.body.style.backgroundColor = '#007FC1';
  }


  lePecas() {
    this.crud.leRegistro('/produtos').subscribe((data) => {
      console.log(data);
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
