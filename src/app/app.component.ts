import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sigatec Informática';

  constructor(private meta: Meta) {
   this.adicionaMetaTags();
  }

  adicionaMetaTags() {
    this.meta.addTags([
      {name: 'charset', content: 'utf-8'},
      {name: 'description', content: 'SiMostra - Descrição da loja'},
      {name: 'reply-to', content: 'gustavokreischer@gmail.com'},
      {name: 'author', content: 'Gustavo Kreischer de Almeida - Grey Morning - gustavokreischer@gmail.com'},
      {name: 'keywords', content: 'SiMostra, sistema, mostruário, estoque'},
      {name: 'robots', content: 'index, follow'}

    ]);
  }
}
