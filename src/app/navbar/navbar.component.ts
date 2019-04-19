import { Component, OnInit } from '@angular/core';
import { CrudService } from './../loja/services/crud.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private crud: CrudService) {
    
   }

  tituloBotaoRedirecionamento: string = 'Produtos';
  isCollapsed = false;
  tituloLoja: string = null;

  destruido: ReplaySubject<boolean> = new ReplaySubject(1);
  erro;

  ngOnInit() {

    this.pegaDadosPagInicial();

  }

  ngAfterViewInit(){
    
  }

  pegaDadosPagInicial() {
    
    this.tituloLoja = localStorage.getItem('nomeLoja');

    if(this.tituloLoja === null){

      this.crud.leRegistro('/configuracaos').takeUntil(this.destruido).subscribe((data) => {

        if(data.length == 0){
          localStorage.setItem('nomeLoja', 'SiMostra');
          this.tituloLoja = localStorage.getItem('nomeLoja');
        } else {
          localStorage.setItem('nomeLoja', data[0].nomeFantasia);
          this.tituloLoja = localStorage.getItem('nomeLoja');
        }
      }, error => {
        this.erro = error;
        console.log(this.erro);
      });
    }
  }

  

}
