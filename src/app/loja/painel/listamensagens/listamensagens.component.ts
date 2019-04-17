import { Component, OnInit } from '@angular/core';
import { dadosContato } from './../../compartilhados/dadosContato';
import { CrudService } from './../../services/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigEmail } from './../../compartilhados/configEmail';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-listamensagens',
  templateUrl: './listamensagens.component.html',
  styleUrls: ['./listamensagens.component.scss']
})
export class ListamensagensComponent implements OnInit {

  constructor(private crud: CrudService, private modalService: NgbModal, private fb: FormBuilder) {
  }

  mensagens: dadosContato[] = null;
  infoClienteModal: dadosContato = null;
  idClienteModal: string = null;
  mensagemBotaoResposta: string = 'Responder';
  erro;
  msg: string = null;
  p: number = 1;

  formRespostaEmail: FormGroup = null;
  resposta: string = null;
  to: string = null;

  configEmail: ConfigEmail = null;

  destruido: ReplaySubject<boolean> = new ReplaySubject(1);
  

  ngOnInit() {
    window.document.body.style.backgroundColor = '#474647';
    this.leMensagens();
    this.leConfigServidorEmail();
  }

  leMensagens() {
    this.crud.leRegistro('/contatos').takeUntil(this.destruido).subscribe((data) => {
      if (data.length === 0) {
        this.msg = 'Você não tem mensagens de contato.';
      } else {
        this.mensagens = data;
        return this.mensagens.sort((a,b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        console.table(this.mensagens);
      }
    }, error => {
      this.erro = error;
    });
  }

  montaFormRespostaEmail(){
    this.formRespostaEmail = this.fb.group({
      msg: ['', Validators.required],
      from: [this.configEmail.conta, Validators.required],
      senha: [this.configEmail.senha, Validators.required],
      to: ['', Validators.required],
      server: [this.configEmail.servidor, Validators.required],
      port: [this.configEmail.porta, Validators.required],
      tls: [this.configEmail.tls, Validators.required]
    });

  }

  leConfigServidorEmail() {
    this.crud.leRegistro('/configEmails').takeUntil(this.destruido).subscribe((data) => {
      this.configEmail = data[0];
      console.table(this.configEmail);
      this.montaFormRespostaEmail();
    }, error => {
      console.log('Erro ao ler configuracoes de email');
      this.erro = error;
    });
  }
  

  enviaFormRespostaEmail(){

    /*
      Dados que precisam ser enviados:
      conta,
      senha,
      msg,
      server,
      port,
      tls
    */
    ;
    this.resposta = this.formRespostaEmail.value;

    console.table(this.resposta);

    this.crud.enviaEmail('/enviaEmail', this.resposta).takeUntil(this.destruido).subscribe((data) => {
      console.log(data);
      this.msg = 'Email enviado com sucesso. Acompanhe sua caixa de entrada no provedor do seu email.';
      this.atualizaSituacaoEmail();
    }, error => {
      this.erro = error;
      console.log('Não foi possível enviar o email');
    });
  }

   atualizaSituacaoEmail() {
    this.infoClienteModal.situacao = true;
    this.crud.atualizaRegistro('/contatos', this.idClienteModal , this.infoClienteModal).takeUntil(this.destruido).subscribe((data) => {
      console.log('Situacao da resposta atualizada com sucesso');
      console.table(data);
      this.leMensagens();
    }, error => {
      this.erro = error;
      console.log('Não foi possivel atualizar situacao do email')
    });
  }


  abreModalRespostaEmail(event, conteudo) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    // Passa a id do botao para uma variavel global
    this.idClienteModal = id;

    console.log(id);

    this.crud.leRegistroEspecifico('/contatos', id).takeUntil(this.destruido).subscribe((data) => {
      this.infoClienteModal = data;
      console.table(this.infoClienteModal);
      this.modalService.open(conteudo, { centered: true });
      //Seta o form montado quando clicam na modal para receber o email do cliente, realizado na consulta acima - infoClienteModal
      this.formRespostaEmail.controls['to'].setValue(this.infoClienteModal.email);
    }, error => {
      this.erro = error;
    });

  }

  deletaMensagem(event) {
    let confirma = confirm('Tem certeza que deseja deletar a mensagem?');

    if(confirma) {
      let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(id);
    this.crud.deletaRegistro('/contatos', id).takeUntil(this.destruido).subscribe((data) => {
      console.log('Cliente deletado com sucesso.');
      for (let i = 0; i < this.mensagens.length; i++) {
        if (this.mensagens[i].id === id) {
          this.mensagens.splice(i, 1);
        }
      }
    }, error => {
      console.log('ERRO: Não foi possível deletar a mensagem');
    });
    } else {
      alert('Operação cancelada');
      return false;
    }
  }

  ngOnDestroy(){
    this.destruido.next(true);
    this.destruido.complete();
  }
}
