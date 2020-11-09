import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  esAdmin: boolean = true;



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
    this.formularioLogin = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          this.validacionesService.comprobarValidacionEmail,
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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

    if ( this.formularioLogin.get('password').value === 'admin') {
      this.authService.isAdmin(this.esAdmin);
      this.authService.login(this.estaLogueado);
      this.router.navigate(['admin', 'confirmar-eventos'])
    } else {
      this.authService.login(this.estaLogueado);
      this.router.navigate(["privado"]);
    }



  }
}
