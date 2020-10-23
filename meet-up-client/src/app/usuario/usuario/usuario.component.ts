
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensajesErroresService } from 'src/app/shared/services/mensajes-errores.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.scss"]
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;

  formularioUsuario: FormGroup;
  isvalidEmail = /\S+@\S+\.\S+/;

  hide: boolean = true;
  hide2: boolean = true;

  constructor(private fb: FormBuilder, private mensajeErroresService: MensajesErroresService) { }

  ngOnInit(): void {
    this.usuario = new Usuario("Borja", "Arana", "barana@mail.com");
  }

  obtenerMensajeError(campo: string): string {

    return this.mensajeErroresService.obtenerMensajeError(this.formularioUsuario, campo);    
  }

  NoEsCampoValido(campo: string) {

    return this.mensajeErroresService.NoEsCampoValido(this.formularioUsuario, campo);
  
  }
  

}
