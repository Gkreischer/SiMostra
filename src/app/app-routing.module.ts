import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogoComponent } from './loja/visitante/catalogo/catalogo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CdpecaComponent } from './loja/painel/cdpeca/cdpeca.component';
import { ListagemdepecasComponent } from './loja/painel/listagemdepecas/listagemdepecas.component';
import { ListamensagensComponent } from './loja/painel/listamensagens/listamensagens.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'cadastropeca', component: CdpecaComponent},
  { path: 'cadastropeca/:id', component: CdpecaComponent},
  { path: 'listagemdepecas', component: ListagemdepecasComponent },
  { path: 'listamensagens', component: ListamensagensComponent},
  { path: 'home', component: NavbarComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
