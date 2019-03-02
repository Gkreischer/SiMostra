import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { Peca } from './../../compartilhados/peca';
import { Observable, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { Categoria } from './../../compartilhados/categoria';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ImpressaoService } from './../../services/impressao.service';
import { Orcamento } from './../../compartilhados/orcamento';

@Component({
  selector: 'app-montagemdeorcamento',
  templateUrl: './montagemdeorcamento.component.html',
  styleUrls: ['./montagemdeorcamento.component.css']
})
export class MontagemdeorcamentoComponent implements OnInit {

  constructor(private crud: CrudService, private fb: FormBuilder, public impressao: ImpressaoService) {
    window.document.body.style.backgroundColor = "#F45D01";
    this.leCategorias();
  }

  erro;
  msg;
  categorias: Observable<Categoria[]> = null;
  pecas: Observable<Peca[]> = null;

  formPecasOrcamento: FormGroup = null;
  pecasDoForm = [];
  exibeOrcamento: boolean = false;
  pecaSelecionada: Peca = null;
  P: number = 1;

  destruido: ReplaySubject<boolean> = new ReplaySubject(1);
  ngOnInit() {
    this.montaForm();
  }

  leCategorias() {
    this.crud.leRegistro('/categoria').takeUntil(this.destruido).subscribe((data) => {
      this.categorias = data;
    }, error => {
      this.erro = error;
    });
  }

  montaForm() {
    this.formPecasOrcamento = this.fb.group({
      pecasForm: this.fb.array([])
    });
  }

  get pegaPecasOrcamento() {
    return this.formPecasOrcamento.get('pecasForm') as FormArray;
  }

  pegaIdPecaCheckboxEAdicionaPecaNaLista(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(`${id}`);

    let existePeca = this.pegaPecasOrcamento.controls.findIndex(i => i.value.dadosDaPeca.id == id);

    if (existePeca == -1) {
      this.adicionaPecaListaOrcamento(id);
    } else {
      alert('Essa peca já existe no orcamento');
      return false;
    }

  }

  adicionaPecaListaOrcamento(id: string) {

    console.log(`Ids recebido: ${id}`);

    this.crud.leRegistroEspecifico('/produtos', id).takeUntil(this.destruido).subscribe((data) => {

      const peca = this.fb.group({
        dadosDaPeca: [data],
        quantidade: ['']
      });

      console.table(peca.value);

      this.exibeOrcamento = true;

      this.pegaPecasOrcamento.push(peca);

      for (let i = 0; i < this.pegaPecasOrcamento.length; i++) {

        console.table(this.pegaPecasOrcamento.controls[i].value.dadosDaPeca);

      }
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  consultaPorCategoria(event) {

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

  resetaConsulta() {
    this.pecas = null;
    this.pecasDoForm = null;
  }



  executaAdicionarPeca(id: string) {
    this.crud.leRegistroEspecifico('/produtos', id).takeUntil(this.destruido).subscribe((data) => {
      this.exibeOrcamento = true;
      this.pecasDoForm.push(data);
      console.table(this.pecasDoForm);
    }, error => {
      this.erro = error;
      console.log(`Não foi possivel inserir a peca no orcamento. Motivo: ${this.erro}`);
    });

  }

  deletaPecaListaOrcamento(event, i) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(`${id}`);

    let op = confirm('Você tem certeza que deseja remover a peça da lista?');

    if (op) {
      this.pegaPecasOrcamento.removeAt(i);
      let existePeca = this.pegaPecasOrcamento.controls.findIndex(i => i.value.dadosDaPeca.id == id);

      if (existePeca != -1) {
        this.pegaPecasOrcamento.removeAt(i);
        console.log(this.pegaPecasOrcamento);
      } 
    } else {
      console.log('Cancelado a exclusao da peça');
      return false;
    }
  }

  geraPDF() {

    this.pecasDoForm = this.formPecasOrcamento.value;
    console.table(this.pecasDoForm);
    this.impressao.criaTabelaDocPDF(this.pecasDoForm);
  }

}
