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


export const snackbarState = trigger('snackbarState', [
  transition(':enter', [
    style({ bottom: '-100px', transform: 'translate(-50%, 0%) scale(0.3)' }),
    animate(
      '150ms cubic-bezier(0, 0, 0.2, 1)',
      style({
        transform: 'translate(-50%, 0%) scale(1)',
        opacity: 1,
        bottom: '300px',
      })
    ),
  ]),
  transition(':leave', [
    animate(
      '150ms cubic-bezier(0.4, 0, 1, 1)',
      style({
        transform: 'translate(-50%, 0%) scale(0.3)',
        opacity: 0,
        bottom: '-100px',
      })
    ),
  ]),
]);
