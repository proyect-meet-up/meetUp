import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ValidadoresService } from 'src/app/shared/services/validadores.service';
import { AuthService } from '../auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy  {
  formularioLogin: FormGroup;
  hide: boolean = true;
  logueadoSuscription: Subscription;
  estaLogueado: boolean;

  constructor(
    private fb: FormBuilder,
    private validacionesService: ValidadoresService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.crearFormularioLogin();
    this.logueadoSuscription = this.authService.estaLogueadoSource.subscribe((valor) => {
      console.log("el valor es ahora: ", valor)
    })
  }

  ngOnDestroy() {
    this.logueadoSuscription.unsubscribe();
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
    if (this.formularioLogin.invalid) {
      return;
    }

    this.authService.login(true);
 
  
  }
}
