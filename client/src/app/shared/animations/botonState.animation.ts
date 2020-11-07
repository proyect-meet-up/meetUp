import { animate, state, style, transition, trigger } from "@angular/animations";

export const botonState = trigger('botonState', [
  state(
    'inactivo',
    style({
      height: '0',
    })
  ),
  state(
    'activo',
    style({
      minHeight: '100px',
    })
  ),
  transition(
    'inactivo => activo',
    animate('500ms cubic-bezier(0.4, 0, 0.2, 1)')
  ),
  transition('activo => inactivo', animate('500ms ease-out')),
])
