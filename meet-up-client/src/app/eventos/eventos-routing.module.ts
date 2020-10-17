import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";
import { ListadoEventosComponent } from "./listado-eventos/listado-eventos.component";
import { DetalleEventoComponent } from "./detalle-evento/detalle-evento.component";

const routes: Routes = [
  { path: "", component: ListadoEventosComponent },
  { path: "detalle-evento/:id", component: DetalleEventoComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosRoutingModule {}

