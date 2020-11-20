import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MensajesErroresService } from 'src/app/shared/services/mensajes-errores.service';
import { Usuario } from '../usuario.model';


@Component({
  selector: 'app-tab-datos-usuario',
  templateUrl: './tab-datos-usuario.component.html',
  styleUrls: ['./tab-datos-usuario.component.scss'],
})
export class TabDatosUsuarioComponent implements OnInit {
  formularioDatosUsuario: FormGroup;
  @Input() datosUsuario;
  @ViewChild('text', { static: true }) formularioBoton: ElementRef;
  @Output() updateUsuario = new EventEmitter<Usuario>();

  constructor(
    private fb: FormBuilder,
    private render: Renderer2,
    private mensajeErroresService: MensajesErroresService
  ) {}

  ngOnInit(): void {
    this.crearFormularioDatosUsuario();
  }

  crearFormularioDatosUsuario() {
    let { nombre, apellido, email } = this.datosUsuario;

    this.formularioDatosUsuario = this.fb.group({
      nombre: [nombre, Validators.required],
      apellido: [apellido, Validators.required],
      email: [email],
    });

    this.formularioDatosUsuario.disable();
  }

  actualizarDatosUsuario() {
    this.setEnableCamposFormulario(
      'email',
      this.formularioDatosUsuario.controls
    );
    this.render.setProperty(
      this.formularioBoton.nativeElement,
      'textContent',
      'Actualizar datos'
    );

    this.updateUsuario.emit(this.formularioDatosUsuario.value);
  }

  obtenerMensajeError(campo: string): string {
    return this.mensajeErroresService.obtenerMensajeError(
      this.formularioDatosUsuario,
      campo
    );
  }

  setEnableCamposFormulario(valor, ...campos) {
    let [propiedadesControls] = campos;

    for (const control in propiedadesControls) {
      if (!control.includes(valor)) {
        this.formularioDatosUsuario.get(control).enable();
      }
    }
  }

  noEsCampoValido(campo: string) {
    return this.mensajeErroresService.noEsCampoValido(
      this.formularioDatosUsuario,
      campo
    );
  }
}
