import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleEventoComponent } from '../eventos/detalle-evento/detalle-evento.component';
import { ListadoEventosComponent } from '../eventos/listado-eventos/listado-eventos.component';

const routes: Routes = [
  { path: "", component: ListadoEventosComponent },
  {
    path: "perfil",
    loadChildren: () =>
      import("./usuario/usuario.module").then((m) => m.UsuarioModule),
  },
  { path: "detalle-evento/:id", component: DetalleEventoComponent },

  // {
  //   path: "",
  //   loadChildren: () =>
  //     import("../eventos/eventos.module").then((m) => m.EventosModule),
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivadoRoutingModule { }
