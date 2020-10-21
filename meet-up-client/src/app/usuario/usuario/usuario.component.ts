import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';
import { Usuario } from '../usuario.model';

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.scss"],
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;

  constructor() {}

  ngOnInit(): void {
    this.usuario = new Usuario('Borja', 'Arana', 'barana@mail.com')
  }
}
