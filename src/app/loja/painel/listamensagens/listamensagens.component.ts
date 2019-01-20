import { Component, OnInit } from '@angular/core';
import { dadosContato } from './../../compartilhados/dadosContato';
import { CrudService } from './../../services/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-listamensagens',
  templateUrl: './listamensagens.component.html',
  styleUrls: ['./listamensagens.component.css']
})
export class ListamensagensComponent implements OnInit {

  constructor(private crud: CrudService, private modalService: NgbModal, private fb: FormBuilder) {
  }

  mensagens: dadosContato[] = null;
  infoClienteModal: dadosContato = null;
  id: string = null;
  mensagemBotaoResposta: string = 'Responder';
  erro;
  msg: string = null;
  p: number = 1;

  formRespostaEmail: FormGroup = null;
  resposta: string = null;

  

  ngOnInit() {
    window.document.body.style.backgroundColor = '#474647';
    this.leMensagens();
    this.montaFormRespostaEmail();
  }

  leMensagens() {
    this.crud.leRegistro('/contatos').subscribe((data) => {
      if (data.length === 0) {
        this.msg = 'Você não tem mensagens de contato.';
      } else {
        this.mensagens = data;
        console.table(this.mensagens);
      }
    }, error => {
      this.erro = error;
    });
  }

  montaFormRespostaEmail(){
    this.formRespostaEmail = this.fb.group({
      from: ['sigatec@gmail.com', Validators.required],
      msg: ['']
    });

  }

  enviaFormRespostaEmail(){
    this.resposta = this.formRespostaEmail.value;

    console.table(this.resposta);

    this.crud.enviaEmail('/enviaEmail', this.resposta).subscribe((data) => {
      console.log(data);
      this.msg = 'Email enviado com sucesso. Acompanhe sua caixa de entrada no provedor do seu email.'
    }, error => {
      this.erro = error;
      console.log('Não foi possível enviar o email');
    });
  }

  abreModalRespostaEmail(event, conteudo) {

    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(id);

    this.crud.leRegistroEspecifico('/contatos', id).subscribe((data) => {
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
    this.crud.deletaRegistro('/contatos', id).subscribe((data) => {
      console.log('Cliente deletado com sucesso.');
      for (let i = 0; i < this.mensagens.length; i++) {
        if (this.mensagens[i].id === id) {
          this.mensagens.splice(i, 1);
        }
      }
    }, error => {
      console.log('ERRO: Não foi possível deletar a mensagem');
    });
  }


}
