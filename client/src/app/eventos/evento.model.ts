import { Direccion, Usuario } from '../privado/usuario/usuario.model';
import { Categoria } from './categoria.model';

export interface Evento {
  _id: string;
  titulo: string;
  descripcion: string;
  direccion: Direccion;
  usuario: Usuario;
  categoria: Categoria;
  imagen: string;
  confirmar: boolean;
  precio?: number;
  fecha?: Date | string;
  tags?: [];
  createdAt?: Date | string;
  updatedAt?: Date | string;
  reservas?: []
}
