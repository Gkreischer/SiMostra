import { NgModule, LOCALE_ID }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import localePt from '@angular/common/locales/pt';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.module';
import { AppRoutingModule }     from './app-routing.module';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent }         from './app.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InfoempresaComponent } from './infoempresa/infoempresa.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogoComponent } from './loja/visitante/catalogo/catalogo.component';
import { NavCatalogoComponent } from './loja/visitante/nav-catalogo/nav-catalogo.component';
import { ProdutosComponent } from './loja/visitante/produtos/produtos.component';
import { CdpecaComponent } from './loja/painel/cdpeca/cdpeca.component';
import { ListagemdepecasComponent } from './loja/painel/listagemdepecas/listagemdepecas.component';
import { ListamensagensComponent } from './loja/painel/listamensagens/listamensagens.component';
import { PagInicialComponent } from './pag-inicial/pag-inicial.component';
import { PagInicialLojaComponent } from './loja/pag-inicial-loja/pag-inicial-loja.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    InfoempresaComponent,
    ServicosComponent,
    ContatoComponent,
    RodapeComponent,
    ParceirosComponent,
    NotFoundComponent,
    CatalogoComponent,
    NavCatalogoComponent,
    ProdutosComponent,
    CdpecaComponent,
    ListagemdepecasComponent,
    ListamensagensComponent,
    PagInicialComponent,
    PagInicialLojaComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
     }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
