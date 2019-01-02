import { Component, OnInit, HostListener } from '@angular/core';
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
  msg: string;

  p: number = 1;
  itensPorPagina: number = 4;

  alturaTela: number = null;
  larguraTela: number = null;

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
