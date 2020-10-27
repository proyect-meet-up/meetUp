import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsModule } from '../shared/componentes/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AdminComponent } from './admin/admin.component';

import { ReservasComponent } from './reservas/reservas.component';
import { ConfirmarEventosComponent } from './confirmar-eventos/confirmar-eventos.component';


@NgModule({
  declarations: [AdminComponent, ConfirmarEventosComponent, ReservasComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCheckboxModule,
  ],
})
export class AdminModule {}
