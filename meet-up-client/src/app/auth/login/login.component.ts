import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MensajesErroresService } from 'src/app/shared/services/mensajes-errores.service';
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
    private authService: AuthService,
    private mensajeErroresService: MensajesErroresService
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

    return this.mensajeErroresService.obtenerMensajeError(this.formularioLogin, campo);    
  }


  noEsCampoValido(campo: string) {

    return this.mensajeErroresService.noEsCampoValido(this.formularioLogin, campo);
  
  }

  login() {
    if (this.formularioLogin.invalid) {
      return;
    }

    this.authService.login(true);
 
  
  }
}
