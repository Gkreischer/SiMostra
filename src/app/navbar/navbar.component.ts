import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  exibeHome: boolean = true;
  tituloBotaoRedirecionamento: string = 'Produtos';

  ngOnInit() {
  }

  redirecionaParaLoja() {
    if(this.exibeHome){
      this.exibeHome = false;
    } else {
      if(!this.exibeHome){
        this.exibeHome = true;
      }
    }

    console.log(this.exibeHome);
  }

}
