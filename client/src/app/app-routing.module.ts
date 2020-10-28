import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';

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
    path: 'privado',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./privado/privado.module').then((m) => m.PrivadoModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then( m => m.AdminModule)
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
