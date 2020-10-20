import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from 'rxjs';

import { Evento, eventos } from "./evento.model";

@Injectable({
  providedIn: "root",
})
export class EventoService {
  cursos: Evento[] = eventos;

  eventosBuscadosSource = new BehaviorSubject<Evento[]>(this.cursos);
  eventosBuscados$ = this.eventosBuscadosSource.asObservable();

  constructor() {}

  obtenerEventos(): Evento[] {
    console.log("todos los eventos desde el servidor ", this.cursos)
    this.eventosBuscadosSource.next(this.cursos);
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
    let cursos = this.cursos.filter((curso) => curso.titulo.includes(busqueda)); 
    this.eventosBuscadosSource.next(cursos);
    console.log("eventos ENCONTRADOS: ", cursos)  
       
     return cursos;
  
  }
}
