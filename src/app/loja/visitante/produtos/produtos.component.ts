import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { Peca } from './../../compartilhados/peca';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.lePecas();
  }

  pecas: Peca[] = null;
  erro;

  lePecas(){
    this.crud.leRegistro('/produtos').subscribe((data) => {
      this.pecas = data;
      console.table(this.pecas);
    }, error => {
      this.erro = error;
    });
  }

}
