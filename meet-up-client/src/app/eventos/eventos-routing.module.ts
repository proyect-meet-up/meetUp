import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";
import { ListadoEventosComponent } from "./listado-eventos/listado-eventos.component";
import { DetalleEventoComponent } from "./detalle-evento/detalle-evento.component";
import { ReservaEventoComponent } from './reserva-evento/reserva-evento.component';
import { DetalleEventoRegistradoComponent } from './detalle-evento-registrado/detalle-evento-registrado.component';
import { ListadoRegistradoComponent } from './listado-registrado/listado-registrado.component';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';

const routes: Routes = [
  { path: '', component: ListadoEventosComponent },
  { path: 'detalle-evento/:id', component: DetalleEventoComponent },
  { path: 'reserva-evento/:id', component: ReservaEventoComponent},
  { path: 'detalle-evento/:id/registrado', component: DetalleEventoRegistradoComponent},
  { path: 'eventos', component: ListadoRegistradoComponent},
  { path: 'nuevo-evento', component: NuevoEventoComponent}

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosRoutingModule {}

