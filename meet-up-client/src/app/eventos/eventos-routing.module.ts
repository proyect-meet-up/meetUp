import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoEventosComponent } from './listado-eventos/listado-eventos.component';

const routes: Routes = [
  { path: '', component: ListadoEventosComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
