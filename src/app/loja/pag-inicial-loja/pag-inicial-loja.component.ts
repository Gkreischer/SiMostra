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
    window.document.body.style.backgroundColor = `background: #88bfe8; /* Old browsers */
    background: -moz-linear-gradient(top, #88bfe8 0%, #70b0e0 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #88bfe8 0%,#70b0e0 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #88bfe8 0%,#70b0e0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#88bfe8', endColorstr='#70b0e0',GradientType=0 ); /* IE6-9 */`;
  }

  ngOnDestroy(){
    window.document.body.style.backgroundColor = 'white';
  }

}
