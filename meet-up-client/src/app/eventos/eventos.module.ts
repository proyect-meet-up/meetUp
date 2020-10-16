import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';

import { CardEventoComponent } from './card-evento/card-evento.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { ReservaEventoComponent } from './reserva-evento/reserva-evento.component';
import { ListadoRegistradoComponent } from './listado-registrado/listado-registrado.component';
import { DetalleRegistradoComponent } from './detalle-registrado/detalle-registrado.component';



@NgModule({
  declarations: [   
    CardEventoComponent, 
    DetalleEventoComponent, 
    ReservaEventoComponent, 
    ListadoRegistradoComponent, 
    DetalleRegistradoComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }