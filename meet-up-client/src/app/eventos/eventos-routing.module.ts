import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ListadoEventosComponent } from './listado-eventos/listado-eventos.component';

const routes: Routes = [
  { path: '', component: ListadoEventosComponent}
  
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
