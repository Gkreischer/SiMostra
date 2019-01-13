import { Component, OnInit } from '@angular/core';
import { dadosContato } from './../../compartilhados/dadosContato';
import { CrudService } from './../../services/crud.service';

@Component({
  selector: 'app-listamensagens',
  templateUrl: './listamensagens.component.html',
  styleUrls: ['./listamensagens.component.css']
})
export class ListamensagensComponent implements OnInit {

  constructor(private crud: CrudService) {
   }

  mensagens: dadosContato[] = null;
  erro;
  p: number = 1;

  ngOnInit() {
    window.document.body.style.backgroundColor = '#474647';
    this.leMensagens();
  }

  leMensagens(){
    this.crud.leRegistro('/contatos').subscribe((data) => {
      this.mensagens = data;
      console.table(this.mensagens);
    }, error => {
      this.erro = error;
    });
  }

}
