import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MensajesErroresService } from 'src/app/shared/services/mensajes-errores.service';
import { NavigationEnd, Router } from '@angular/router';

import { ValidadoresService } from 'src/app/shared/services/validadores.service';
import { AuthService } from '../auth.service';

import { Subscription } from 'rxjs';
import { UrlService } from '@shared/componentes/services/url.service';

interface LoginRespuesta {
  ok: boolean;
  respuesta: boolean;
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formularioLogin: FormGroup;
  hide: boolean = true;
  sub: Subscription;
  urlPrevio: string[];

  constructor(
    private fb: FormBuilder,
    private validacionesService: ValidadoresService,
    private authService: AuthService,
    private mensajeErroresService: MensajesErroresService,
    private router: Router,
    private urlService: UrlService
  ) {
    this.sub = this.urlService.previousUrl$
      .subscribe( data => {

          if ( data !== null) {
            this.urlPrevio = data.split('/');
          } else {
            this.urlPrevio = [];
          }
    })
  }

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
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  obtenerMensajeError(campo: string): string {
    return this.mensajeErroresService.obtenerMensajeError(
      this.formularioLogin,
      campo
    );
  }

  noEsCampoValido(campo: string) {
    return this.mensajeErroresService.noEsCampoValido(
      this.formularioLogin,
      campo
    );
  }

  login() {
    console.log('URL Previo:', this.urlPrevio)

    this.authService.login(this.formularioLogin.value).subscribe(
      (data: LoginRespuesta) => {

        if (data.respuesta == false) {
          if ( this.urlPrevio.length === 0 ) {
            this.router.navigate(['privado'])
          } else {
            this.router.navigate(['privado', `${this.urlPrevio[1]}`, `${this.urlPrevio[2]}`])
            this.urlService.setPreviousUrl(null)
          }

        } else {
          this.authService.isAdmin(true);
          if ( this.urlPrevio.length === 0) {
            this.router.navigate(['admin', 'confirmar-eventos']);
            this.urlService.setPreviousUrl(null);
          } else {

            this.router.navigate([
              'admin',
              `${this.urlPrevio[1]}`,
              `${this.urlPrevio[2]}`,
            ]);
            this.urlService.setPreviousUrl(null);
          }
        }
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
