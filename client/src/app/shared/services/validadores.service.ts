import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/privado/usuario/usuario.service';

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

  crearValidacion(usuarioService: UsuarioService): AsyncValidatorFn {
    return ( control: AbstractControl ): Observable<ValidationErrors> => {
      return usuarioService.comprobacionExisteEmailUsuario(control.value).pipe(
        pluck('ok'),
        map((res: boolean) => (res ? null : { existeUsuarioEmail: true }))
      );
    }
  }
}
