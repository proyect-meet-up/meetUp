import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MensajesErroresService {

  constructor() { }

  obtenerMensajeError(formulario: FormGroup, campo: string): string {
    console.log(formulario.get(campo).errors);
    let mensaje;
    if(formulario.get(campo).errors?.required ) {
      mensaje = 'Debes introducir un valor';
    } else if (formulario.get(campo).hasError('pattern')) {
      mensaje = 'No es un email válido'
    } else if (formulario.get(campo).hasError('minlength')) {
      const longitudMinima = formulario.get(campo).errors?.minlength.requiredLength;
      mensaje = `El campo debe tener un mínimo de ${longitudMinima} caracteres`
    }

    return mensaje;
  }

  noEsCampoValido(formulario: FormGroup, campo: string) {
    return (formulario.get(campo).touched || formulario.get(campo).dirty && 
      !formulario.get(campo).valid);
  }

}
