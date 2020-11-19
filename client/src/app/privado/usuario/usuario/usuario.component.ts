
import { Component, OnInit} from '@angular/core';
import { skip } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  actualizarUsuario(usuarioActualizado: Usuario) {
    this.usuarioService
      .actualizarUsuario(usuarioActualizado, this.usuario._id)
      .subscribe((respuestaUsuario: any) =>  {
        let { usuarioActualizado } = respuestaUsuario;
        localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
      });
  }
}
