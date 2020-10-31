import { Component,OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { EventoService } from 'src/app/eventos/evento.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { timer } from 'rxjs';

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


  constructor( private eventosService: EventoService ) {}

  ngOnInit() {
    this.cambiosFitroInput();
    this.eventosService.clickBoton$
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
              source.subscribe(
                () => this.limpiarCampoBuscador()
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
