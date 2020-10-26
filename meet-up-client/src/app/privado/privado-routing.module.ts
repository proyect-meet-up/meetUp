import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleEventoComponent } from '../eventos/detalle-evento/detalle-evento.component';
import { ListadoEventosComponent } from '../eventos/listado-eventos/listado-eventos.component';
import { ReservaEventoComponent } from '../eventos/reserva-evento/reserva-evento.component';

const routes: Routes = [  
  {
    path: "",
    loadChildren: () =>
      import("../eventos/eventos.module").then((m) => m.EventosModule)
  },
  {
    path: "perfil",
    loadChildren: () =>
      import("./usuario/usuario.module").then((m) => m.UsuarioModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivadoRoutingModule { }
