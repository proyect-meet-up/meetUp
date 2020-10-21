import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  formularioUsuario: FormGroup;
  isvalidEmail = /\S+@\S+\.\S+/;

  hide: boolean = true;
  hide2: boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formularioUsuario = this.fb.group({
      nombre: ['', Validators.required] ,
      apellido: ['', Validators.required],
      email: ['', [Validators.email, Validators.pattern(this.isvalidEmail)]],
      password:['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword:['', [Validators.required, Validators.minLength(6)]]
      
    })
  }

  obtenerMensajeError(campo: string): string {
    let mensaje;
    if(this.formularioUsuario.get(campo).errors?.required ) {
      mensaje = 'Debes introducir un valor';
    } else if (this.formularioUsuario.get(campo).hasError('pattern')) {
      mensaje = 'No es un email válido'
    } else if (this.formularioUsuario.get(campo).hasError('minlength')) {
      const longitudMinima = this.formularioUsuario.get(campo).errors?.minlength.requiredLength;
      mensaje = `El campo debe tener un mínimo de ${longitudMinima} caracteres`
    }

    return mensaje;
  }

  NoEsCampoValido(campo: string) {
    return (this.formularioUsuario.get(campo).touched || this.formularioUsuario.get(campo).dirty && 
      !this.formularioUsuario.get(campo).valid);
  }
  

}
