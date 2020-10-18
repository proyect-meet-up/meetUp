import { Injectable } from "@angular/core";

import { Evento, eventos } from "./evento.model";

@Injectable({
  providedIn: "root",
})
export class EventoService {
  cursos: Evento[] = eventos;

  constructor() {}

  obtenerEventos(): Evento[] {
    return this.cursos.slice(); // con .slice devolvemos una copia del array, evitamos la mutabilidad
  }

  obtenerEvento(id: number): Evento {
    let curso = this.cursos.filter((curso) => curso.uid === id); // Filtramos por el id
    let [evento] = curso; // Aplicando destructuring. El filter nos devuelve un array y de ahí obtenemos el objeto evento.Buenas prácticas -- Programación funcional

    // Comprobamos que nos devuelve un evento
    if (!evento) {
      return;
    }

    return evento;
  }
}
