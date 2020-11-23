import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from 'rxjs';
import { Evento } from '../evento.model'
import { EventoService } from '../evento.service';
import { ProvinciaResponse } from '../../shared/componentes/direccion.model';

@Component({
  selector: 'app-listado-eventos',
  templateUrl: './listado-eventos.component.html',
  styleUrls: ['./listado-eventos.component.scss'],
})
export class ListadoEventosComponent implements OnInit, OnDestroy {
  eventosSuscription: Subscription;
  eventos: Evento[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.eventosSuscription = this.eventoService.eventosBuscados$.subscribe(
      (datosActualizados: Evento[]) => {
        this.eventos = datosActualizados;
      }
    );
  }

  eventoClickBoton() {
    this.eventoService.eventoClickBoton(true);
  }


  ngOnDestroy() {
    this.eventosSuscription.unsubscribe();
  }
}
