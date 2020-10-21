import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 /*  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  }, */
  {
    path: '',
    loadChildren: () => import('./eventos/eventos.module').then((m) => m.EventosModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./usuario/usuario.module').then((m) => m.UsuarioModule),
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
