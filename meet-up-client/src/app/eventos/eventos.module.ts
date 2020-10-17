import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';

import { CardEventoComponent } from './card-evento/card-evento.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { ReservaEventoComponent } from './reserva-evento/reserva-evento.component';
import { ListadoRegistradoComponent } from './listado-registrado/listado-registrado.component';
import { DetalleRegistradoComponent } from './detalle-registrado/detalle-registrado.component';
import { ListadoEventosComponent } from './listado-eventos/listado-eventos.component';
<<<<<<< HEAD


@NgModule({
  declarations: [   
    CardEventoComponent, 
    DetalleEventoComponent, 
    ReservaEventoComponent, 
    ListadoRegistradoComponent, 
=======



@NgModule({
  declarations: [
    CardEventoComponent,
    DetalleEventoComponent,
    ReservaEventoComponent,
    ListadoRegistradoComponent,
>>>>>>> efe932b79e6c141eea74169f6c3fe9f627355308
    DetalleRegistradoComponent,
    ListadoEventosComponent
  ],
  imports: [    
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
