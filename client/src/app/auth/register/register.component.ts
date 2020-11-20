import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/privado/usuario/usuario.model';
import { UsuarioService } from 'src/app/privado/usuario/usuario.service';
import { MensajesErroresService } from 'src/app/shared/services/mensajes-errores.service';
import { ValidadoresService } from 'src/app/shared/services/validadores.service';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

interface RegistroRespuesta {
  ok: boolean,
  token: string,
  usuario: Usuario
}

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
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router: Router
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
      .subscribe( (res: RegistroRespuesta) => {
         this.authService.estaLogueadoSource.next(true);
         this.router.navigate(['privado']);
         let { rol , ...usuario} = res.usuario;

         // Desde la BBDD nos llega el uid. Camnbaimos la propiedad por _id para que se pueda editar perfil usuario.
         usuario['_id'] = usuario['uid'];
         delete usuario['uid'];

         this.authService.usuarioSubject.next(usuario)

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
