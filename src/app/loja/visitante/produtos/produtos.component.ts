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
  categorias: any = [];

  p: number = 1;

  destruido: ReplaySubject<boolean> = new ReplaySubject(1);

  lePecas() {
    this.crud.leRegistroComFiltro('/produtos', 'visivel', true).takeUntil(this.destruido).subscribe((data) => {
      console.log(data);
      if (data.length == 0) {
        this.msg = 'Você não tem peças cadastradas';
      } else {
        this.pecas = data;
        console.table(this.pecas);

        this.categorias = this.removeDuplicatas(data, 'categoria');
      }
    }, error => {
      this.erro = error;
    });
  }

  removeDuplicatas(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  alteraProdutosPelaCategoria(event) {

    let target = event.target || event.srcElement || event.currentTarget;
    let categoriaSelecionada = target.attributes.id.value;

    console.log(categoriaSelecionada);

    this.crud.leRegistroComFiltroAND('/produtos', 'categoria', categoriaSelecionada, 'visivel', true).takeUntil(this.destruido).subscribe((data) => {
      this.pecas = data;
      console.log(this.pecas);
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  ngOnDestroy() {
    this.destruido.next(true);
    this.destruido.complete();
  }

  resetaPesquisa() {
    this.pecas = null;
    this.lePecas();
    console.log('Limpado categorias');
  }

}
