// Módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

import { EventosRoutingModule } from './eventos-routing.module';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ComponentsModule } from '../shared/componentes/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Componentes
import { CardEventoComponent } from './card-evento/card-evento.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { ReservaEventoComponent } from './reserva-evento/reserva-evento.component';
import { ListadoRegistradoComponent } from './listado-registrado/listado-registrado.component';
import { ListadoEventosComponent } from './listado-eventos/listado-eventos.component';
import { DetalleEventoRegistradoComponent } from './detalle-evento-registrado/detalle-evento-registrado.component';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';





@NgModule({
  declarations: [
    CardEventoComponent,
    DetalleEventoComponent,
    ReservaEventoComponent,
    ListadoRegistradoComponent,
    ListadoEventosComponent,
    DetalleEventoRegistradoComponent,
    NuevoEventoComponent,
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    PipesModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ComponentsModule
  ],
  exports: [
    //NuevoEventoComponent
  ],
})
export class EventosModule {}
