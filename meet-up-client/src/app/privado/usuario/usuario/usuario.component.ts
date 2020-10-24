
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usuario = new Usuario("Borja", "Arana", "barana@mail.com");
  }
  
 

}
