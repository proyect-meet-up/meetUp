import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from "@angular/material/tabs";
import { TabDatosUsuarioComponent } from './tab-datos-usuario/tab-datos-usuario.component';
import { TabCambioPasswordComponent } from './tab-cambio-password/tab-cambio-password.component';

@NgModule({
  declarations: [UsuarioComponent, TabDatosUsuarioComponent, TabCambioPasswordComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
})
export class UsuarioModule {}
