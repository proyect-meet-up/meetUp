import { Injectable } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root",
})
export class ValidadoresService {
  constructor() {}

  comprobarValidacionEmail(control: FormControl): { [s: string]: boolean } {

    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if( !pattern.test(control.value.toLowerCase() )) {
      return {
        mailNoValido: true,
      }
    }

    return null;

  }

  passwordIguales(pass1: string, pass2: string) {

    // Importante: Este método tiene que regresar una función para que luego se pueda ejecutar en el compontente
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1];
      const pass2Control = formGroup.controls[pass2];

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ passwordNoIguales: true });
      }
    };
  }

  // Ejemplo validación asíncrona

  existeUsuarioEmail(control: FormControl): Promise<any> | Observable<any>{

    // Que se dispare cuando el usuario interactua con el campo email
    if( !control.value) {
      return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
      // Aqui hacemos supuestamente la llamada HTTP.

      setTimeout(() => {
        if ( control.value === 'gonzalo@mail.com') {
          resolve({
            existeUsuarioEmail: true
          })
        } else {
          resolve(true)
        }
      }, 3500);
    })
  }
}
