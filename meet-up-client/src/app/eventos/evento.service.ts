import { Injectable } from "@angular/core";

import { Evento, eventos } from "./evento.model";

@Injectable({
  providedIn: "root",
})
export class EventoService {
  cursos: Evento[] = eventos;

  constructor() {}

  obtenerEventos(): Evento[] {
    return this.cursos.slice();
  }

  obtenerEvento(id: number): Evento {
    let curso = this.cursos.filter((curso) => curso.uid === id);
    let [evento] = curso;

    // TODO retornar el evento vacio
    if (!evento) {
      return;
    }

    return evento;
  }

  obtenerEventoDeBuscador(busqueda: string) {
    let curso = this.cursos.filter((curso) => curso.titulo.includes(busqueda));
    let [evento] = curso;
    
     return evento;
  
  }
}
