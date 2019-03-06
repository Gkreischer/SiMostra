import { Component, OnInit } from '@angular/core';
import { Orcamento } from './../../compartilhados/orcamento';
import { CrudService } from './../../services/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigEmail } from './../../compartilhados/configEmail';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.component.html',
  styleUrls: ['./orcamentos.component.css']
})
export class OrcamentosComponent implements OnInit {

  constructor(private crud: CrudService, private modalService: NgbModal, private fb: FormBuilder) {
  }

  orcamentos: Orcamento[] = null;
  infoClienteModal: Orcamento = null;
  idOrcamentoModal: string = null;
  mensagemBotaoResposta: string = 'Finalizar';
  erro;
  msg: string = null;
  p: number = 1;
  orcamentoFinalizado: Orcamento;

  formOrcamentoFinalizado: FormGroup = null;
  to: string = null;

  configEmail: ConfigEmail = null;

  destruido: ReplaySubject<boolean> = new ReplaySubject(1);
  

  ngOnInit() {
    window.document.body.style.backgroundColor = '#474647';
    this.leOrcamentos();
    this.leConfigServidorEmail();
    this.montaFormOrcamento();
  }

  leOrcamentos() {
    
    this.crud.leRegistro('/orcamentos').takeUntil(this.destruido).subscribe((data) => {
      if (data.length === 0) {
        this.msg = 'Você ainda não tem orçamentos cadastrados';
      } else {
        this.orcamentos = data;
        console.log(this.orcamentos);
        return this.orcamentos.sort((a,b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        
      }
    }, error => {
      this.erro = error;
    });
  }

  montaFormOrcamento(){
    this.formOrcamentoFinalizado = this.fb.group({
      endereco: ['', Validators.required],
      data_de_entrega: ['', Validators.required]
    });

  }

  leConfigServidorEmail() {
    this.crud.leRegistro('/configEmails').takeUntil(this.destruido).subscribe((data) => {
      this.configEmail = data[0];
      console.table(this.configEmail);
      this.montaFormOrcamento();
    }, error => {
      console.log('Erro ao ler configuracoes de email');
      alert('Você cadastrou suas informações de email em configurações?');
      this.erro = error;
    });
  }
  

  finalizaOrcamentoCliente(){

    this.orcamentoFinalizado = this.formOrcamentoFinalizado.value;

    console.log(this.formOrcamentoFinalizado)
    
  }


  abreModalFinalizacaoOrcamento(event, conteudo) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    // Passa a id do botao para uma variavel global
    this.idOrcamentoModal = id;

    console.log(id);

    this.crud.leRegistroEspecifico('/orcamentos', id).takeUntil(this.destruido).subscribe((data) => {
      this.infoClienteModal = data;
      console.table(this.infoClienteModal);
      this.modalService.open(conteudo, { centered: true });
    }, error => {
      this.erro = error;
    });

  }

  deletaMensagem(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(id);
    this.crud.deletaRegistro('/orcamentos', id).takeUntil(this.destruido).subscribe((data) => {
      console.log('Orçamento deletado com sucesso.');
      for (let i = 0; i < this.orcamentos.length; i++) {
        if (this.orcamentos[i].id === id) {
          this.orcamentos.splice(i, 1);
        }
      }
    }, error => {
      console.log('ERRO: Não foi possível deletar o orçamento', error);
    });
  }

  ngOnDestory(){
    this.destruido.next(true);
    this.destruido.complete();
  }

}
