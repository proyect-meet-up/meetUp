import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ControlContainer, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';


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
  exiteUsuarioEmail(emails, control) {
    let resultado = emails.findIndex( e => e === control.value);
    if ( resultado === -1 ) {
      return true;
    } else {
      return false;
    }
  }

  static crearValidacion(service: AuthService): AsyncValidatorFn {
    return ( control: AbstractControl ): Observable<ValidationErrors> => {
      return service.getUsuarios().pipe(
        pluck('usuarios'),
        map((data: any) => data.map((e) => e.email)),
        map(emails => this.prototype.exiteUsuarioEmail(emails, control)),
        map((res: boolean) => (res ? null : { existeUsuarioEmail: true })),
        tap(res => console.log(res))
      );
    }
  }
}
