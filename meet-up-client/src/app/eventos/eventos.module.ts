// Módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

import { EventosRoutingModule } from './eventos-routing.module';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

// Componentes
import { CardEventoComponent } from './card-evento/card-evento.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { ReservaEventoComponent } from './reserva-evento/reserva-evento.component';
import { ListadoRegistradoComponent } from './listado-registrado/listado-registrado.component';
import { ListadoEventosComponent } from './listado-eventos/listado-eventos.component';
import { DetalleEventoRegistradoComponent } from './detalle-evento-registrado/detalle-evento-registrado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CardEventoComponent,
    DetalleEventoComponent,
    ReservaEventoComponent,
    ListadoRegistradoComponent,
    ListadoEventosComponent,
    DetalleEventoRegistradoComponent,
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
    ReactiveFormsModule
  ],
})
export class EventosModule {}
