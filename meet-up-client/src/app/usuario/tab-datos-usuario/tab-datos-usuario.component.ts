import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-tab-datos-usuario",
  templateUrl: "./tab-datos-usuario.component.html",
  styleUrls: ["./tab-datos-usuario.component.scss"],
})
export class TabDatosUsuarioComponent implements OnInit {
  formularioDatosUsuario: FormGroup;
  @Input() datosUsuario;
  @ViewChild("text", { static: true }) formularioBoton: ElementRef;

  constructor(private fb: FormBuilder, private render: Renderer2) {}

  ngOnInit(): void {
    this.crearFormularioDatosUsuario();
  }

  crearFormularioDatosUsuario() {
    let { nombre, apellido, email } = this.datosUsuario;

    this.formularioDatosUsuario = this.fb.group({
      nombre: [nombre, Validators.required],
      apellido: [apellido, Validators.required],
      email: [email, Validators.required],
    });

    this.formularioDatosUsuario.disable();
  }

  actualizarDatosUsuario() {
    this.formularioDatosUsuario.enable();
    this.render.setProperty(this.formularioBoton.nativeElement, 'textContent', 'Actualizar datos')
    console.log(this.formularioDatosUsuario.value);
  }
}
