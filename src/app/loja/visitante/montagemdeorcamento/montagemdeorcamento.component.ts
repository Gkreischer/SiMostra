import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { Peca } from './../../compartilhados/peca';
import { Observable, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { Categoria } from './../../compartilhados/categoria';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-montagemdeorcamento',
  templateUrl: './montagemdeorcamento.component.html',
  styleUrls: ['./montagemdeorcamento.component.css']
})
export class MontagemdeorcamentoComponent implements OnInit {

  constructor(private crud: CrudService, private fb: FormBuilder) {
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
      pecas: ['', Validators.required]
    });
  }


  consultaPorCategoria(event) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(id);

    this.crud.leRegistroComFiltro('/produtos', 'categoria', id).takeUntil(this.destruido).subscribe((data) => {
      this.pecas = data;
      console.log(this.pecas);
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  resetaConsulta() {
    this.pecas = null;
  }

  pegaIdPecaCheckbox(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(`${id}`);

    this.adicionaPecaListaOrcamento(id);

  }

  adicionaPecaListaOrcamento(id: string) {

    console.log(`Ids recebido: ${id}`);

    this.crud.leRegistroEspecifico('/produtos', id).takeUntil(this.destruido).subscribe((data) => {
      this.exibeOrcamento = true;
      this.pecasDoForm.push(data);
      console.table(this.pecasDoForm);
    }, error => {
      this.erro = error;
      console.log(`Não foi possivel inserir a peca no orcamento. Motivo: ${this.erro}`);
    });

    console.table(this.pecasDoForm);
    this.exibeOrcamento = true;

    if(this.pecasDoForm.length === 0){
      this.exibeOrcamento = false;
    }

  }

  deletaPecaListaOrcamento(event) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(`${id}`);

    let op = confirm('Você tem certeza que deseja remover a peça da lista?');

    if(op){

      for(let i = 0 ; i < this.pecasDoForm.length ; i++){
        if(this.pecasDoForm[i].id === id){
          this.pecasDoForm.splice(i, 1);
          alert('Peça deletada com sucesso');
        }
      }
    } else {
      console.log('Cancelado a exclusao da peça');
      return false;
    }
  }

}
