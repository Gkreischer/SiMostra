import { Component, OnInit } from '@angular/core';
import { Peca } from './../../compartilhados/peca';
import { CrudService } from './../../services/crud.service';
@Component({
  selector: 'app-listagemdepecas',
  templateUrl: './listagemdepecas.component.html',
  styleUrls: ['./listagemdepecas.component.css']
})
export class ListagemdepecasComponent implements OnInit {

  constructor(private crud: CrudService) {
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


  

}
