import { animate, group, keyframes, state, style, transition, trigger } from "@angular/animations";

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

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state(
      'in',
      style({
        'max-height': '500px',
        opacity: '1',
        visibility: 'visible',
      })
    ),
    state(
      'out',
      style({
        'max-height': '0px',
        opacity: '0',
        visibility: 'hidden',
      })
    ),
    transition('in => out', [
      group([
        animate(
          '400ms ease-in-out',
          style({
            opacity: '0',
          })
        ),
        animate(
          '600ms ease-in-out',
          style({
            'max-height': '0px',
          })
        ),
        animate(
          '700ms ease-in-out',
          style({
            visibility: 'hidden',
          })
        ),
      ]),
    ]),
    transition('out => in', [
      group([
        animate(
          '1ms ease-in-out',
          style({
            visibility: 'visible',
          })
        ),
        animate(
          '600ms ease-in-out',
          style({
            'max-height': '500px',
          })
        ),
        animate(
          '800ms ease-in-out',
          style({
            opacity: '1',
          })
        ),
      ]),
    ]),
  ]),
];

export const flashingState = [
  trigger('flashing', [
    transition(':enter', [
      animate(
        '1s linear',
        keyframes([
          style({ opacity: 0 }),
          style({ opacity: 0.5 }),
          style({ opacity: 1 }),
        ])),
    ])
  ]),
];
