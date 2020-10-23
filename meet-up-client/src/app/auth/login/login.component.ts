import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ValidadoresService } from 'src/app/shared/services/validadores.service';
import { AuthService } from '../auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit  {
  formularioLogin: FormGroup;
  hide: boolean = true;
  estaLogueado: boolean = true;

  constructor(
    private fb: FormBuilder,
    private validacionesService: ValidadoresService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.crearFormularioLogin();
  }

  crearFormularioLogin() {
    this.formularioLogin = this.fb.group(
      {
        email: [
          "",
          [Validators.required,this.validacionesService.comprobarValidacionEmail],
          this.validacionesService.existeUsuarioEmail,
        ],
        password: ["", [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  obtenerMensajeError(campo: string): string {
    let mensaje;
    if (this.formularioLogin.get(campo).errors?.required) {
      mensaje = "Debes introducir un valor";
    } else if (this.formularioLogin.get(campo).hasError("mailNoValido")) {
      mensaje = "No es un email válido";
    } else if (this.formularioLogin.get(campo).hasError("minlength")) {
      const longitudMinima = this.formularioLogin.get(campo).errors?.minlength
        .requiredLength;
      mensaje = `El campo debe tener un mínimo de ${longitudMinima} caracteres`;
    }

    return mensaje;
  }

  noEsCampoValido(campo: string) {
    return (
      this.formularioLogin.get(campo).touched ||
      (this.formularioLogin.get(campo).dirty &&
        !this.formularioLogin.get(campo).valid)
    );
  }

  login() {
    // if (this.formularioLogin.invalid) {
    //   return;
    // }

    this.authService.login(this.estaLogueado);
    this.router.navigate(["/"]);

  }
}
