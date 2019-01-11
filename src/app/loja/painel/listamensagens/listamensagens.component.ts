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
    document.body.style.background = 'linear-gradient(to bottom, #1e5799 0%,#207cca 81%,#2989d8 90%,#2989d8 90%,#7db9e8 100%)';
   }

  mensagens: dadosContato[] = null;
   erro;
  

  ngOnInit() {
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
