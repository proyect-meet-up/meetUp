import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  hide: boolean = true;  
  isvalidEmail = /\S+@\S+\.\S+/;

  constructor(private fb: FormBuilder) { }

  
  ngOnInit(): void {

    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.isvalidEmail)]],
      password: ['', Validators.required]
    }) 

  }

  obtenerMensajeError(campo: string): string {
    let mensaje;
    if(this.formularioLogin.get(campo).errors?.required ) {
      mensaje = 'Debes introducir un valor';
    } else if (this.formularioLogin.get(campo).hasError('pattern')) {
      mensaje = 'No es un email válido'
    } else if (this.formularioLogin.get(campo).hasError('minlength')) {
      const longitudMinima = this.formularioLogin.get(campo).errors?.minlength.requiredLength;
      mensaje = `El campo debe tener un mínimo de ${longitudMinima} caracteres`
    }

    return mensaje;
  }

  NoEsCampoValido(campo: string) {
    return (this.formularioLogin.get(campo).touched || this.formularioLogin.get(campo).dirty && 
      !this.formularioLogin.get(campo).valid);
  }
  

  login() {
    if(this.formularioLogin.invalid) {
      return;
    }

    console.log(this.formularioLogin.value);
  }

}
