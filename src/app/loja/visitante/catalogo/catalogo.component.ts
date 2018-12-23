import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() {
    document.body.style.background = 'linear-gradient(to bottom, #1e5799 0%,#207cca 81%,#2989d8 90%,#2989d8 90%,#7db9e8 100%)';
   }

  ngOnInit() {
  }

}
