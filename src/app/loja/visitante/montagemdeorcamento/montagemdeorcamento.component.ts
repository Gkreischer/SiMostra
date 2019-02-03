import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { Peca } from './../../compartilhados/peca';
import { Observable, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { Categoria } from './../../compartilhados/categoria';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ImpressaoService } from './../../services/impressao.service';

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


  destruido: ReplaySubject<boolean> = new ReplaySubject(1);
  ngOnInit() {
    return this.montaForm();
  }

  leCategorias() {
    this.crud.leRegistro('/categoria').takeUntil(this.destruido).subscribe((data) => {
      return this.categorias = data;
    }, error => {
      return this.erro = error;
    });
  }

  montaForm() {
    this.formPecasOrcamento = this.fb.group({
      pecas: ['', Validators.required]
    });
  }


  consultaPorCategoria(event) {

    let target = event.target || event.srcElement || event.currentTarget;
    let categoriaSelecionada = target.attributes.id.value;

    console.log(categoriaSelecionada);

    this.crud.leRegistroComFiltroAND('/produtos', 'categoria', categoriaSelecionada, 'visivel', true).takeUntil(this.destruido).subscribe((data) => {
      this.pecas = data;
      return console.log(this.pecas);
    }, error => {
      this.erro = error;
      return console.log(this.erro);
    });
  }

  resetaConsulta() {
    return this.pecas = null;
  }

  pegaIdPecaCheckbox(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(`${id}`);

    return this.adicionaPecaListaOrcamento(id);

  }

  adicionaPecaListaOrcamento(id: string) {

    console.log(`Ids recebido: ${id}`);

    let contador: number = 0;

    if (this.pecasDoForm.length != 0) {
      for (let i = 0; i < this.pecasDoForm.length; i++) {

        if (id === this.pecasDoForm[i].id) {
          contador++;

          if (contador > 1) {
            return false;
          }
          console.log('Peca ja existe no orcamento');

          let op = confirm('Peça já existe no orçamento. Deseja adicionair mais?');

          if (op) {
            this.executaAdicionarPeca(id);
          }
          else {
            console.log('Operação de adicionar peca duplicada no orcamento cancelada');
            return false;
          }
        } else {
          if(i > 0){
            return false;
          }
          this.executaAdicionarPeca(id);
          
        }
      }
    } else {
      this.executaAdicionarPeca(id);
    }

    if (this.pecasDoForm.length === 0) {
      this.exibeOrcamento = false;
    }

  }

  executaAdicionarPeca(id: string) {
    this.crud.leRegistroEspecifico('/produtos', id).takeUntil(this.destruido).subscribe((data) => {
      this.exibeOrcamento = true;
      this.pecasDoForm.push(data);
      return console.table(this.pecasDoForm);
    }, error => {
      this.erro = error;
      return console.log(`Não foi possivel inserir a peca no orcamento. Motivo: ${this.erro}`);
    });

  }

  deletaPecaListaOrcamento(event) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(`${id}`);

    let op = confirm('Você tem certeza que deseja remover a peça da lista?');

    if (op) {

      for (let i = 0; i < this.pecasDoForm.length; i++) {
        if (this.pecasDoForm[i].id === id) {
          this.pecasDoForm.splice(i, 1);
          return alert('Peça deletada com sucesso');
        }
      }
    } else {
      console.log('Cancelado a exclusao da peça');
      return false;
    }
  }

  geraImpressaoOrcamentoERegistra(){
    return 
  }

  geraPDF(){
    console.table(this.pecasDoForm);
    this.impressao.criaTabelaDocPDF(this.pecasDoForm);
  }

}
