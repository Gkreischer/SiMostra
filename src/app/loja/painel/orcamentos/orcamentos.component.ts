import { Component, OnInit } from '@angular/core';
import { Orcamento } from './../../compartilhados/orcamento';
import { CrudService } from './../../services/crud.service';
import { ImpressaoService } from './../../services/impressao.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigEmail } from './../../compartilhados/configEmail';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { Funcionario } from '../../compartilhados/funcionario';


@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.component.html',
  styleUrls: ['./orcamentos.component.scss']
})
export class OrcamentosComponent implements OnInit {

  constructor(private crud: CrudService, private modalService: NgbModal, private fb: FormBuilder, private impressaoService: ImpressaoService) {
  }

  orcamentos: Orcamento[] = null;
  infoClienteModal: Orcamento = null;
  idOrcamentoModal: string = null;
  mensagemBotaoResposta: string = 'Finalizar';
  transformaBooleanParaStringEmCampoParcelado: string = null;
  abaSelecionada;
  erro;
  orcamentoEntregue;
  funcionarios: Funcionario = null;
  msg: string = null;
  p: number = 1;
  orcamentoFinalizado: Orcamento;
  exibePecasOrcamento: boolean = false;
  formOrcamentoFinalizado: FormGroup = null;
  formFinalizaPedido: FormGroup = null;
  to: string = null;
  id: string = null;
  configEmail: ConfigEmail = null;
  campoParcelamento: boolean = false;
  dadosOrcamentoEntregue: Orcamento = null;
  destruido: ReplaySubject<boolean> = new ReplaySubject(1);


  ngOnInit() {
    window.document.body.style.backgroundColor = '#474647';
    this.leOrcamentos();
    this.montaFormFinalizaOrcamentoEntrega();
  }

  leOrcamentos() {

    this.orcamentos = [];

    this.abaSelecionada = 'A PAGAR';

    console.log(`Aba selecionada: ${this.abaSelecionada}`);

    this.crud.leRegistroComFiltro('/montagemOrcamentos', 'situacao', 'A PAGAR').takeUntil(this.destruido).subscribe((data) => {
      this.orcamentos = data;
      console.log(this.orcamentos);
      return this.orcamentos.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }, error => {
      this.erro = error;
    });
  }

  leOrcamentosSituacao(event) {

    this.orcamentos = [];

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(id);

    if (id === 'EM PRODUÇÃO') {
      this.abaSelecionada = 'EM PRODUÇÃO';
    } else {
      if (id === 'ENTREGUE') {
        this.abaSelecionada = 'ENTREGUE';
      } else {
        if(id === 'A PAGAR') {
          this.abaSelecionada = 'PESQUISAR';
          this.orcamentos = [];
        }
      }
    }

    console.log(`Aba selecionada: ${this.abaSelecionada}`);

    this.crud.leRegistroComFiltro('/orcamentos', 'situacao', id).takeUntil(this.destruido).subscribe((data) => {

      this.orcamentos = data;
      console.log(this.orcamentos);
      return this.orcamentos.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }, error => {
      this.erro = error;
    });

  }

  montaFormColocaOrcamentoEmProducao() {
    this.formOrcamentoFinalizado = this.fb.group({
      nome: this.infoClienteModal.nome,
      cpfcnpj: this.infoClienteModal.cpfcnpj,
      telefone: this.infoClienteModal.telefone,
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      cep: ['', Validators.required],
      formaPagamento: ['', Validators.required],
      valorPago: ['', Validators.required],
      dataEntrega: ['', Validators.required],
      parcelado: false,
      numeroParcelas: 0,
      observacao: '',
      pecasOrcamento: this.infoClienteModal.pecasForm,
      valorTotal: parseFloat(this.infoClienteModal.precoTotal),
      situacao: 'EM PRODUÇÃO'
    });
  }

  montaFormFinalizaOrcamentoEntrega() {
    this.formFinalizaPedido = this.fb.group({
      nomeFuncionario: ['', Validators.required],
      situacao: ['ENTREGUE']
    });
  }

  atualizaOrcamento() {

    let idCliente = this.id;

    this.orcamentoFinalizado = this.formOrcamentoFinalizado.value;

    console.log(this.orcamentoFinalizado);
    this.crud.criaRegistro('/orcamentos', this.orcamentoFinalizado).takeUntil(this.destruido).subscribe((data) => {
      console.log('Orcamento atualizado com sucesso');
      this.crud.deletaRegistro('/montagemOrcamentos', this.infoClienteModal.id).takeUntil(this.destruido).subscribe((data) => {
        console.log('Orcamento deletado com sucesso de montagemOrcamentos');
        this.modalService.dismissAll();
        this.leOrcamentos();
      }, error => {
        console.log('Não foi possível deletar o orcamento de montagem orcamento', error);
      });
    }, error => {
      this.erro = error;
      console.log('Nao foi possivel atualizar orcamento');
    });

  }

  geraPDF(event){
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;
    
    this.impressaoService.recebeInfoGeraPdf(id);
    
  }

  entregaOrcamento() {
    this.orcamentoEntregue = this.formFinalizaPedido.value;
    this.id = this.infoClienteModal.id;
    this.crud.atualizaRegistro('/orcamentos', this.id, this.orcamentoEntregue).takeUntil(this.destruido).subscribe((data) => {
      this.modalService.dismissAll();
      console.table(data);
      console.log('Orcamento finalizado e entregue');
      this.leOrcamentos();
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
    console.log(this.orcamentoEntregue);
  }

  abreModalFinalizacaoOrcamento(event, orcamentoAPAGAR) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    // Passa a id do botao para uma variavel global
    this.idOrcamentoModal = id;

    console.log(id);

    this.crud.leRegistroEspecifico('/montagemOrcamentos', id).takeUntil(this.destruido).subscribe((data) => {
      this.infoClienteModal = data;
      console.table(this.infoClienteModal);
      this.id = this.infoClienteModal.id;
      this.modalService.open(orcamentoAPAGAR, { centered: true, size: 'lg', backdrop: 'static' });
      console.log(this.infoClienteModal);
      this.montaFormColocaOrcamentoEmProducao();
      this.formOrcamentoFinalizado.controls['pecasOrcamento'].setValue([...this.infoClienteModal.pecasForm]);
    }, error => {
      this.erro = error;
    });

  }

  deletaOrcamento(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(id);

    let alerta = confirm('Deseja deletar o orçamento?');

    if (alerta) {
      this.crud.deletaRegistro('/montagemOrcamentos', id).takeUntil(this.destruido).subscribe((data) => {
        console.log('Orçamento deletado com sucesso.');
        for (let i = 0; i < this.orcamentos.length; i++) {
          if (this.orcamentos[i].id === id) {
            this.orcamentos.splice(i, 1);
          }
        }
      }, error => {
        console.log('ERRO: Não foi possível deletar o orçamento', error);
      });
    } else {
      console.log('Opção de deletar cancelada.');
      alert('Operação de deletar cancelada');
    }
  }

  lerDadosOrcamentoAceito(event, orcamentoEmProducao) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(id);

    this.leFuncionarios();

    this.crud.leRegistroEspecifico('/orcamentos', id).takeUntil(this.destruido).subscribe((data) => {
      this.infoClienteModal = data;
      console.table(this.infoClienteModal);
      this.modalService.open(orcamentoEmProducao, { centered: true });
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  leFuncionarios() {
    this.crud.leRegistro('/funcionarios').takeUntil(this.destruido).subscribe((data) => {
      this.funcionarios = data;
      console.log(this.funcionarios);
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  leOrcamentoEntregue(event, orcamentoEntregue){
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(id);

    this.crud.leRegistroEspecifico('/orcamentos', id).takeUntil(this.destruido).subscribe((data) => {
      this.dadosOrcamentoEntregue = data;
      let parcelado = this.dadosOrcamentoEntregue.parcelado ? 'Sim' : 'Não';
      this.transformaBooleanParaStringEmCampoParcelado = parcelado;
      console.table(this.dadosOrcamentoEntregue);
      this.modalService.open(orcamentoEntregue, { centered: true});
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  exibeCampoParcelas() {
    if (this.campoParcelamento) {
      this.formOrcamentoFinalizado.controls['parcelado'].setValue(false);
      this.campoParcelamento = false;
    } else {
      if (!this.campoParcelamento) {
        this.formOrcamentoFinalizado.controls['parcelado'].setValue(true);
        this.campoParcelamento = true;
      }
    }
  }


  ngOnDestroy() {
    this.destruido.next(true);
    this.destruido.complete();
  }


}
