import { Component, OnInit } from '@angular/core';
import { dadosContato } from './../../compartilhados/dadosContato';
import { CrudService } from './../../services/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listamensagens',
  templateUrl: './listamensagens.component.html',
  styleUrls: ['./listamensagens.component.css']
})
export class ListamensagensComponent implements OnInit {

  constructor(private crud: CrudService, private modalService: NgbModal) {
  }

  mensagens: dadosContato[] = null;
  infoClienteModal: dadosContato = null;
  id: string = null;
  mensagemBotaoResposta: string = 'Responder';
  erro;
  msg: string = null;
  p: number = 1;

  ngOnInit() {
    window.document.body.style.backgroundColor = '#474647';
    this.leMensagens();
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
