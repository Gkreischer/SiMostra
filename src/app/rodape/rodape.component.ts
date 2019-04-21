import { Component, OnInit } from '@angular/core';
import { CrudService } from './../loja/services/crud.service';
import { DadosEmpresa } from './../loja/compartilhados/dadosEmpresa';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  localizacaoEmpresa: DadosEmpresa;
  erro;
  msg: string;

  constructor(private crud: CrudService) {
    
   }

  ngOnInit() {
    this.leInfoLoja();
  }

  leInfoLoja(){
    this.crud.leRegistro('/configuracaos').subscribe((data) => {
      this.localizacaoEmpresa = data[0];
      console.log(this.localizacaoEmpresa);
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

}
