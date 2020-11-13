import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleEventoRegistradoComponent } from '../eventos/detalle-evento-registrado/detalle-evento-registrado.component';
import { NuevoEventoComponent } from '../eventos/nuevo-evento/nuevo-evento.component';
import { AdminComponent } from './admin/admin.component';
import { ConfirmarEventosComponent } from './confirmar-eventos/confirmar-eventos.component';

import { ReservasComponent } from './reservas/reservas.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "nuevo-evento",
        component: NuevoEventoComponent,
      },
      {
        path: "reservas",
        component: ReservasComponent,
      },
      {
        path: "historial",
        component: ReservasComponent,
      },
      {
        path: 'confirmar-eventos',
        component: ConfirmarEventosComponent
      },
      {
        path: 'confirmar-eventos/:evento',
        component: DetalleEventoRegistradoComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
