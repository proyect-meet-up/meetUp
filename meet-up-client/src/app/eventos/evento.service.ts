import { Injectable } from '@angular/core';

import { Evento, eventos } from './evento.model'

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  cursos: Evento[] = eventos;

  constructor() { }

  obtenerEventos() {
    return this.cursos.slice(); // con .slice devolvemos una copia del array, evitamos la mutabilidad
  }

  obtenerEvento(id: number) {
    return this.cursos[id];
  }

}
