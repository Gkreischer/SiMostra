import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { Peca } from './../../compartilhados/peca';
import { ReplaySubject } from 'rxjs';
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
  }

  erro;
  msg;
  sucesso: string;
  categorias: Categoria[] = null;
  pecas: Peca[] = null;
  categoriasOrdemAlfabetica = [];
  formPecasOrcamento: FormGroup = null;
  orcamento: Orcamento[] = [];
  valorTotalOrcamento: number = 0;
  exibeOrcamento: boolean = false;
  pecaSelecionada: Peca = null;
  p: number = 1;
  destruido: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit() {
    this.montaForm();
    this.leCategorias();
  }

  leCategorias() {
    this.crud.leRegistro('/categoria').takeUntil(this.destruido).subscribe((data) => {
      this.categorias = data;
      for(let i = 0 ; i < this.categorias.length ; i++) {
        if(this.categorias[i].categoria){
          this.categoriasOrdemAlfabetica.push(this.categorias[i].categoria);
        }
      }
      return this.categoriasOrdemAlfabetica.sort();
    }, error => {
      this.erro = error;
    });
  }

  montaForm() {
    this.formPecasOrcamento = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
      telefone: ['', Validators.required],
      cpfcnpj: ['', Validators.required],
      pecasForm: this.fb.array([]),
      situacao: ['A PAGAR', Validators.required]
    });
  }

  get f(){
    return this.formPecasOrcamento.controls;
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
        quantidade: ['', Validators.required]
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
    this.orcamento = null;
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

  salvaOrcamento() {
    this.valorTotalOrcamento = 0;

    this.calculaValorTotalOrcamento();

    this.formPecasOrcamento.controls['nome'].setValue(this.formPecasOrcamento.controls['nome'].value.toUpperCase());

    this.formPecasOrcamento.value.precoTotal = this.valorTotalOrcamento.toFixed(2);

    console.log(this.formPecasOrcamento.value);

    this.orcamento = this.formPecasOrcamento.value;

    this.crud.criaRegistro('/montagemOrcamentos', this.orcamento).takeUntil(this.destruido).subscribe((data) => {
      this.sucesso = 'Orçamento registrado com sucesso. Vá a loja e informe seus dados para prosseguir com a compra';
      console.log(data);
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  calculaValorTotalOrcamento() {
    let quantidadePecasOrcamento = this.formPecasOrcamento.value.pecasForm.length;

    console.log(quantidadePecasOrcamento);
    
    for(let i = 0 ; i < quantidadePecasOrcamento ; i++) {

      console.log(this.formPecasOrcamento.value.pecasForm[i]);

      this.valorTotalOrcamento = this.valorTotalOrcamento + (this.formPecasOrcamento.value.pecasForm[i].dadosDaPeca.preco * this.formPecasOrcamento.value.pecasForm[i].quantidade);

    }
  }

  ngOnDestory() {
    this.destruido.next(true);
    this.destruido.complete();
  }

}
