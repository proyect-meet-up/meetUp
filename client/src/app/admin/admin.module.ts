import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsModule } from '../shared/componentes/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


import { AdminComponent } from './admin/admin.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ConfirmarEventosComponent } from './confirmar-eventos/confirmar-eventos.component';
import { CardAdminComponent } from './card-admin/card-admin.component';
import { MatDividerModule } from '@angular/material/divider';
import { TableAdminComponent } from './table-admin/table-admin.component';
import { CheckboxAdminComponent } from './checkbox-admin/checkbox-admin.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AdminComponent, ConfirmarEventosComponent, ReservasComponent, CardAdminComponent, TableAdminComponent, CheckboxAdminComponent],
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
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatButtonModule
  ],
})
export class AdminModule {}
