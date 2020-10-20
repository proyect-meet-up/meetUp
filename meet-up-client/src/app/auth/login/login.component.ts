import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/shared/services/validadores.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validacionesService: ValidadoresService
  ) {}

  get mailNoValido() {
    return this.formularioLogin.get('email').invalid && this.formularioLogin.get('email').touched;
  }

  ngOnInit(): void {
    this.crearFormularioLogin();
  }

  crearFormularioLogin() {
    this.formularioLogin = this.fb.group(
      {
        email: ['', [this.validacionesService.comprobarValidacionEmail], this.validacionesService.existeUsuarioEmail],
        password: ['', [Validators.required]],
        password1: ['', [Validators.required]],
      },
      {
       validators: this.validacionesService.passwordIguales('password', 'password1')
      }
    );
  }

  login() {
    // if (!this.formularioLogin.valid) {
    //   return;
    // }

    console.log(this.formularioLogin);
  }
}
