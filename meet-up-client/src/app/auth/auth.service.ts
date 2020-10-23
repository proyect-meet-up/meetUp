import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  estaLogueadoSource = new BehaviorSubject<boolean>(false);
  estaLogueado$ = this.estaLogueadoSource.asObservable();


  login(valor: boolean) {
    console.log('Me estoy logueando...', valor)
    this.estaLogueadoSource.next(valor);
  }

 logout (valor:boolean): void {
    console.log("Estoy saliendo de la aplicación...", valor);
    this.estaLogueadoSource.next(valor);
  }

}
