// Módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

import { EventosRoutingModule } from './eventos-routing.module';
import { MatButtonModule } from "@angular/material/button";

// Componentes
import { CardEventoComponent } from './card-evento/card-evento.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { ReservaEventoComponent } from './reserva-evento/reserva-evento.component';
import { ListadoRegistradoComponent } from './listado-registrado/listado-registrado.component';
import { DetalleRegistradoComponent } from './detalle-registrado/detalle-registrado.component';
import { ListadoEventosComponent } from './listado-eventos/listado-eventos.component';




@NgModule({
  declarations: [
    CardEventoComponent,
    DetalleEventoComponent,
    ReservaEventoComponent,
    ListadoRegistradoComponent,
    DetalleRegistradoComponent,
    ListadoEventosComponent,
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    PipesModule,
    MatButtonModule
  ],
})
export class EventosModule { }
