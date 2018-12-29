import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
   }

  exibeHome: boolean = true;
  tituloBotaoRedirecionamento: string = 'Produtos';
  isCollapsed = false;

  ngOnInit() {
    
  }

  redirecionaParaLoja() {
    if(this.exibeHome){
      this.exibeHome = false;
      document.body.style.background = 'linear-gradient(to bottom, #1e5799 0%,#207cca 81%,#2989d8 90%,#2989d8 90%,#7db9e8 100%)';
    } else {
      if(!this.exibeHome){
        this.exibeHome = true;
        document.body.style.background = '#000000';
      }
    }
  }


}
