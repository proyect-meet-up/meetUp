import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoEventosComponent } from '../eventos/listado-eventos/listado-eventos.component';

const routes: Routes = [
  {path: '', component: ListadoEventosComponent},
  {path: 'perfil', loadChildren: ()=> import('./usuario/usuario.module').then((m) => m.UsuarioModule)},
  { path: 'detalle-evento/:id', loadChildren: ()=> import('../eventos/eventos.module').then((m) => m.EventosModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivadoRoutingModule { }
