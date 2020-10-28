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
    let sinAcentos = this.quitarAcentos(busqueda);
    let cursos = this.cursos.filter((curso) => this.quitarAcentos(curso.titulo.toLowerCase()).includes(sinAcentos.toLowerCase())); 
    this.eventosBuscadosSource.next(cursos);          
    return cursos;  
  }

  quitarAcentos(cadena){
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
  }
}
