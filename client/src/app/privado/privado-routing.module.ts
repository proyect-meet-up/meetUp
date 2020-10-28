import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoEventoComponent } from '../eventos/nuevo-evento/nuevo-evento.component';

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
