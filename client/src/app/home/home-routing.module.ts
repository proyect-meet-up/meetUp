import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoEventosComponent } from '../eventos/listado-eventos/listado-eventos.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
/*   {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../eventos/eventos.module').then((m) => m.EventosModule),
      }
    ]
  } */

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
