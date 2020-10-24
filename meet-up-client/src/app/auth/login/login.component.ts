import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MensajesErroresService } from 'src/app/shared/services/mensajes-errores.service';
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
    private mensajeErroresService: MensajesErroresService,
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

    return this.mensajeErroresService.obtenerMensajeError(this.formularioLogin, campo);    
  }


  noEsCampoValido(campo: string) {

    return this.mensajeErroresService.noEsCampoValido(this.formularioLogin, campo);
  
  }

  login() {
    // if (this.formularioLogin.invalid) {
    //   return;
    // }

    this.authService.login(this.estaLogueado);
    this.router.navigate(["/"]);

  }
}
