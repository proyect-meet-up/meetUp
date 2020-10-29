import { Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { Subscription, timer, interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { SubjectServicesService } from 'src/app/shared/services/subjectServices.service';
import { Evento, eventos } from '../evento.model'
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-listado-eventos',
  templateUrl: './listado-eventos.component.html',
  styleUrls: ['./listado-eventos.component.scss'],
})
export class ListadoEventosComponent implements OnInit, OnDestroy {
  eventosSuscription: Subscription;

  eventos: Evento[] = [];
  timer: number = 100;

  constructor(private eventoService: EventoService, private eventoClick: SubjectServicesService) {}

  ngOnInit(): void {
    this.eventosSuscription = this.eventoService.eventosBuscados$.subscribe(
      (datosActualizados: Evento[]) => {
        this.eventos = datosActualizados;
        // if ( this.eventos.length === 0) {
        //   const time = interval(1000);
        //   const segundos = time.pipe(
        //     take(5)
        //   )
        //   segundos.subscribe(() => {
        //     console.log('Se dispara el evento interval...')
        //     this.descuentoTiempo(this.timer);
        //   }
        //   );
        // }
      }
    );
  }

  eventoClickBoton() {
    this.eventoClick.eventoClickBoton(true);
  }

  descuentoTiempo(tiempo) {
    this.timer = tiempo - 20;
  }

  ngOnDestroy() {
    this.eventosSuscription.unsubscribe();
  }
}
