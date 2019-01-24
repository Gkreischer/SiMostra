import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { Peca } from './../../compartilhados/peca';
import { Observable, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
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

  pecas: Observable<Peca[]> = null;
  erro;
  msg: string;

  p: number = 1;

  destruido: ReplaySubject<boolean> = new ReplaySubject(1);

  lePecas() {
    this.crud.leRegistroComFiltro('/produtos','visivel',true).takeUntil(this.destruido).subscribe((data) => {
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

  ngOnDestroy(){
    this.destruido.next(true);
    this.destruido.complete();
  }

}
