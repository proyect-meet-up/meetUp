import { Component,OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Evento } from 'src/app/eventos/evento.model';
import { EventoService } from 'src/app/eventos/evento.service';
import { debounceTime, distinctUntilChanged, take, tap } from 'rxjs/operators';
import { interval, timer } from 'rxjs';
import { SubjectServicesService } from '../../services/subjectServices.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit{

  @ViewChild('filtroInput' ,{static: true}) filtroInput: NgModel;  // tipo NgModel, si no sería por defecto HtmlElement y no tendría el observable valueChanges
  // NOTA {static: true} : https://stackoverflow.com/questions/62214770/cannot-read-property-valuechanges-of-undefined
  terminoBusqueda: string;
  eventos;


  constructor( private eventosService: EventoService , private clickEvento: SubjectServicesService) {}

  ngOnInit() {
    this.cambiosFitroInput();
    this.clickEvento.clickBoton$
    .pipe(
        tap((data) => console.log('¿Han hecho click?', data))
      )
    .subscribe(
      () => this.limpiarCampoBuscador()
     )
  }

  cambiosFitroInput() {
      this.filtroInput.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((terminoABuscar) => {
          if (terminoABuscar) {
            this.obtenerEventoPorTerminoBuscado(terminoABuscar);
            if (this.eventos.length === 0) {
              const source = timer(5000);
              source.pipe(tap(() => console.log('No hay eventos'))).subscribe(
                () => this.limpiarCampoBuscador(),
                () => console.log('Complete')
              );
            }
          } else {
            this.obtenerTodosLosEventos();
          }
        });
  }



  limpiarCampoBuscador() {
    this.terminoBusqueda = '';
  }

  obtenerEventoPorTerminoBuscado( termino: string) {
    this.eventos = [];
    this.eventos = this.eventosService.obtenerEventoDeBuscador(termino);
  }

  obtenerTodosLosEventos() {
    this.eventos = this.eventosService.obtenerEventos();
  }



}
