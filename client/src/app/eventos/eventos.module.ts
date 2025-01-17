// Módulos
import { LOCALE_ID, NgModule } from '@angular/core';
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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';


// Componentes
import { CardEventoComponent } from './card-evento/card-evento.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { ReservaEventoComponent } from './reserva-evento/reserva-evento.component';
import { ListadoRegistradoComponent } from './listado-registrado/listado-registrado.component';
import { ListadoEventosComponent } from './listado-eventos/listado-eventos.component';
import { DetalleEventoRegistradoComponent } from './detalle-evento-registrado/detalle-evento-registrado.component';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';
import { NoResultadosEventosComponent } from './no-resultados-eventos/no-resultados-eventos.component';
import { EventosDelUsuarioComponent } from './eventos-del-usuario/eventos-del-usuario.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    CardEventoComponent,
    DetalleEventoComponent,
    ReservaEventoComponent,
    ListadoRegistradoComponent,
    ListadoEventosComponent,
    DetalleEventoRegistradoComponent,
    NuevoEventoComponent,
    NoResultadosEventosComponent,
    EventosDelUsuarioComponent
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
    ComponentsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    //NuevoEventoComponent
  ]
})
export class EventosModule {}
