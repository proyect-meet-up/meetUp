import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleEventoRegistradoComponent } from '../eventos/detalle-evento-registrado/detalle-evento-registrado.component';
import { EventosDelUsuarioComponent } from '../eventos/eventos-del-usuario/eventos-del-usuario.component';
import { NuevoEventoComponent } from '../eventos/nuevo-evento/nuevo-evento.component';
import { AdminComponent } from './admin/admin.component';
import { ConfirmarEventosComponent } from './confirmar-eventos/confirmar-eventos.component';
import { HistorialEventosComponent } from './historial-eventos/historial-eventos.component';

import { ReservasComponent } from './reservas/reservas.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'nuevo-evento',
        component: NuevoEventoComponent,
      },
      {
        path: 'reservas',
        component: ReservasComponent,
      },
      {
        path: 'historial',
        component: HistorialEventosComponent,
      },
      {
        path: 'confirmar-eventos',
        component: ConfirmarEventosComponent,
      },
      {
        path: 'confirmar-eventos/:evento',
        component: DetalleEventoRegistradoComponent,
      },
      {
        path: 'reservas/:evento',
        component: DetalleEventoRegistradoComponent,
      },
      {
        path: 'historial/:evento',
        component: DetalleEventoRegistradoComponent,
      },
      {
        path: 'eventos/usuario',
        component: EventosDelUsuarioComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
