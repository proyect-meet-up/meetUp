
import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
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
  sub: Subscription;

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.sub = this.authService.usuario$.subscribe( (data: Usuario ) => this.usuario = data );
    // this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  actualizarUsuario(usuarioActualizado: Usuario) {
    this.usuarioService
      .actualizarUsuario(usuarioActualizado, this.usuario._id)
      .subscribe((respuestaUsuario: any) =>  {
        let { usuarioActualizado } = respuestaUsuario;
        this.authService.usuarioSubject.next(usuarioActualizado);
        // localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
