import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/shared/services/validadores.service';

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
    private validacionesService: ValidadoresService
  ) {}

  get passwordNoIguales() {
    return (
      this.formularioRegistro.get("confirmacionPassword").invalid &&
      this.formularioRegistro.get("confirmacionPassword").touched
    );
  }

  get emailUsuarioExiste() {
    return (
      this.formularioRegistro.get("email").invalid &&
      this.formularioRegistro.get("email").touched
    );
  }

  ngOnInit(): void {
    this.crearFormularioRegistro();
  }

  crearFormularioRegistro() {
    this.formularioRegistro = this.fb.group(
      {
        nombre: ["", Validators.required],
        apellido: ["", Validators.required],
        email: [
          "",
          [this.validacionesService.comprobarValidacionEmail],
          this.validacionesService.existeUsuarioEmail,
        ],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmacionPassword: ["", Validators.required],
      },
      {
        validators: this.validacionesService.passwordIguales(
          "password",
          "confirmacionPassword"
        ),
      }
    );
  }

  registro() {
    // if (this.formularioRegistro.invalid) {
    //   return;
    // }

    console.log(this.formularioRegistro);
  }
}
