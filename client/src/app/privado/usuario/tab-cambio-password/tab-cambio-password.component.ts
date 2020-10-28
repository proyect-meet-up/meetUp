import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/shared/services/validadores.service';

@Component({
  selector: "app-tab-cambio-password",
  templateUrl: "./tab-cambio-password.component.html",
  styleUrls: ["./tab-cambio-password.component.scss"],
})
export class TabCambioPasswordComponent implements OnInit {
  hide: boolean = false;
  hide2: boolean = false;
  formularioCambioPassword: FormGroup;
  @ViewChild('text', {static: true}) formularioBoton: ElementRef;

  constructor(
    private fb: FormBuilder,
    private validadoresService: ValidadoresService,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
    this.crearFormularioDatosUsuario();
  }

  crearFormularioDatosUsuario() {
    this.formularioCambioPassword = this.fb.group(
      {
        password: ["", Validators.required],
        cambioPassword: ["", Validators.required],
      },
      {
        validators: this.validadoresService.passwordIguales(
          "password",
          "cambioPassword"
        ),
      }
    );

    this.formularioCambioPassword.disable();
  }

  activarBoton() {
    this.render.setProperty(this.formularioBoton.nativeElement, 'textContent', 'Cambiar contraseña');
  }

  actualizarPassword() {
    this.activarBoton();
    this.formularioCambioPassword.enable();
    console.log(this.formularioCambioPassword.value)
  }
}
