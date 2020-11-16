import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/privado/usuario/usuario.service';
import { MensajesErroresService } from 'src/app/shared/services/mensajes-errores.service';
import { ValidadoresService } from 'src/app/shared/services/validadores.service';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  hide2: boolean = true;
  formularioRegistro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validacionesService: ValidadoresService,
    private mensajeErroresService: MensajesErroresService,
    private usuarioService: UsuarioService
  ) {}

  get passwordNoIguales() {
    return (
      this.formularioRegistro.get("confirmacionPassword").invalid &&
      this.formularioRegistro.get("confirmacionPassword").touched
    );
  }


  ngOnInit(): void {
    this.crearFormularioRegistro();
  }

  crearFormularioRegistro() {
    this.formularioRegistro = this.fb.group(
      {
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        email: [
          '',
          [this.validacionesService.comprobarValidacionEmail],
          this.validacionesService.crearValidacion(this.usuarioService),
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmacionPassword: ['', Validators.required],
      },
      {
        validators: this.validacionesService.passwordIguales(
          'password',
          'confirmacionPassword'
        ),
      }
    );
  }

  registro() {
    // if (this.formularioRegistro.invalid) {
    //   return;
    // }    
    this.usuarioService.crearUsuario(this.formularioRegistro.value)
      .pipe(
        tap((data) => console.log("la data del tap", data))
      )
      .subscribe( respuesta => {
        console.log(respuesta)
      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      })
  }

  obtenerMensajeError(campo: string): string {
    return this.mensajeErroresService.obtenerMensajeError(this.formularioRegistro, campo);
  }


  noEsCampoValido(campo: string) {
    return this.mensajeErroresService.noEsCampoValido(this.formularioRegistro, campo);
  }
}
