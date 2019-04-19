import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { Peca } from './../../compartilhados/peca';
import { Observable, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.lePecas();
    this.leCategorias();
  }

  pecas: Peca[] = null;
  erro;
  msg: string;
  categorias: any = [];
  botaoClicado: number
  p: number = 1;
  categoriasOrdemAlfabetica = [];

  destruido: ReplaySubject<boolean> = new ReplaySubject(1);

  lePecas() {
    this.crud.leRegistroComFiltro('/produtos', 'visivel', true).takeUntil(this.destruido).subscribe((data) => {
      console.log(data);
      if (data.length == 0) {
        this.msg = 'Você não tem peças cadastradas';
      } else {
        this.categorias = this.removeDuplicatas(data, 'categoria');
        this.pecas = data;
        console.table(this.pecas);
        return this.pecas.sort((a,b) => {
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        });
      }
    }, error => {
      this.erro = error;
    });
  }

  leCategorias() {
    this.crud.leRegistroComFiltro('/produtos', 'visivel', true).takeUntil(this.destruido).subscribe((data) => {
      this.categorias = this.removeDuplicatas(data, 'categoria');
      for (let i = 0; i < this.categorias.length; i++) {
        if (this.categorias[i].categoria) {
          this.categoriasOrdemAlfabetica.push(this.categorias[i].categoria);
        }
      }
      return this.categoriasOrdemAlfabetica.sort();
    }, error => {
      this.erro = error;
    });
  }

  removeDuplicatas(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  alteraProdutosPelaCategoria(event, index: number) {

    let target = event.target || event.srcElement || event.currentTarget;
    let categoriaSelecionada = target.attributes.id.value;

    this.botaoClicado = index;

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
