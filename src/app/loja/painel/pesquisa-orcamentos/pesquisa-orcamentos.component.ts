import { Component, OnInit } from '@angular/core';
import { Orcamento } from './../../compartilhados/orcamento';
import { CrudService } from './../../services/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImpressaoService } from './../../services/impressao.service';

@Component({
  selector: 'app-pesquisa-orcamentos',
  templateUrl: './pesquisa-orcamentos.component.html',
  styleUrls: ['./pesquisa-orcamentos.component.scss']
})
export class PesquisaOrcamentosComponent implements OnInit {

  formPesquisaNomeOuCpf: FormGroup;
  nomeOuCpf: Orcamento;
  destruido: ReplaySubject<boolean> = new ReplaySubject(1);
  erro;
  dadosOrcamentoEntregue: Orcamento = null;
  transformaBooleanParaStringEmCampoParcelado: string = null;
  clientes: Orcamento[];
  msg: string;

  constructor(private fb: FormBuilder, private crud: CrudService, private modalService: NgbModal, private impressaoService: ImpressaoService) {
    window.document.body.style.backgroundColor = '#474647';
    this.montaForm();
  }

  ngOnInit() {
  }

  montaForm() {
    this.formPesquisaNomeOuCpf = this.fb.group({
      nomeOuCpf: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(64)]]
    });
  }

  get f() {
    return this.formPesquisaNomeOuCpf.controls;
  }

  enviaForm(event) {
    const stringRecebida = (event.target as HTMLInputElement).value.toUpperCase();
    console.log(stringRecebida);

    this.executaConsulta(stringRecebida);
  }

  executaConsulta(palavraPesquisada: string) {
    this.clientes = [];

    this.leOrcamentosParaMontagemPorCpfOuNome(palavraPesquisada);

  }

  leOrcamentosParaMontagemPorCpfOuNome(palavraPesquisada: string) {
    this.crud.leRegistroComFiltroOR('/montagemOrcamentos', 'nome', palavraPesquisada, 'cpfcnpj', palavraPesquisada).takeUntil(this.destruido).subscribe((data) => {
      this.clientes = data;
      this.leOrcamentosAPagarOuEntreguesPorCpfOuNome(palavraPesquisada);
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  leOrcamentosAPagarOuEntreguesPorCpfOuNome(palavraPesquisada: string) {
    this.crud.leRegistroComFiltroOR('/orcamentos', 'nome', palavraPesquisada, 'cpfcnpj', palavraPesquisada).takeUntil(this.destruido).subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.clientes.push(data[i]);
        this.clientes.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        })
      }
      console.log(this.clientes);
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  geraPDF(event){
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;
    
    this.impressaoService.recebeInfoGeraPdf(id);
    
  }

  abreModalInfoOrcamento(event, modalOrcamentoEntregue) {
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(id);

    this.crud.leRegistroEspecifico('/orcamentos', id).takeUntil(this.destruido).subscribe((data) => {
      this.dadosOrcamentoEntregue = data;
      let parcelado = this.dadosOrcamentoEntregue.parcelado ? 'Sim' : 'Não';
      this.transformaBooleanParaStringEmCampoParcelado = parcelado;
      console.table(this.dadosOrcamentoEntregue);
      this.modalService.open(modalOrcamentoEntregue, { centered: true });
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  fechaModal() {
    this.modalService.dismissAll();
  }

  ngOnDestroy() {
    this.destruido.next(true);
    this.destruido.complete();
  }

}
