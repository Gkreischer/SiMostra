import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-inicial-loja',
  templateUrl: './pag-inicial-loja.component.html',
  styleUrls: ['./pag-inicial-loja.component.css']
})
export class PagInicialLojaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    window.document.body.style.backgroundColor = `#2D7DD2`;
  }

  ngOnDestroy(){
    window.document.body.style.backgroundColor = 'white';
  }

}
