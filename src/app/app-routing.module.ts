import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogoComponent } from './loja/visitante/catalogo/catalogo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CdpecaComponent } from './loja/painel/cdpeca/cdpeca.component';
import { ListagemdepecasComponent } from './loja/painel/listagemdepecas/listagemdepecas.component';
import { ListamensagensComponent } from './loja/painel/listamensagens/listamensagens.component';
import { PagInicialComponent } from './pag-inicial/pag-inicial.component';
import { PagInicialLojaComponent } from './loja/pag-inicial-loja/pag-inicial-loja.component';
import { ConfiguracoesComponent } from './loja/painel/configuracoes/configuracoes.component';
import { MontagemdeorcamentoComponent } from './loja/visitante/montagemdeorcamento/montagemdeorcamento.component';
import { OrcamentosComponent } from './loja/painel/orcamentos/orcamentos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'orcamentos', component: OrcamentosComponent },
  { path: 'catalogo', component: PagInicialLojaComponent },
  { path: 'cadastropeca', component: CdpecaComponent },
  { path: 'cadastropeca/:id', component: CdpecaComponent },
  { path: 'listagemdepecas', component: ListagemdepecasComponent },
  { path: 'listamensagens', component: ListamensagensComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },
  { path: 'montagemdeorcamento', component: MontagemdeorcamentoComponent },
  { path: 'home', component: PagInicialComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
