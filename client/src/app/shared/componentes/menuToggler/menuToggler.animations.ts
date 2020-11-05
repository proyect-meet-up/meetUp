import {
  trigger,
  state,
  animate,
  style,
  transition,
  group,
  query,
  animateChild,
} from '@angular/animations';
const $timing = '350ms ease-out';

export const $animations = [
  // Toggler top element
  trigger('top', [
    // Menu style:
    // Rotates the top bar 135 deg and moves it down to the center
    state(
      'menu',
      style({
        transform: 'translateY(8px) rotate(-135deg)',
      })
    ),
    // Default style on close
    state('close', style('*')),
    transition('* => *', animate($timing)),
  ]),
  // Toggler middle element
  trigger('middle', [
    // Menu style: Fades the middle bar while rotating it 135 deg
    state(
      'menu',
      style({
        transform: 'rotate(135deg)',
        opacity: 0,
      })
    ),
    // Default style on close
    state('close', style('*')),
    transition('* => *', animate($timing)),
  ]),
  // Toggler bottom element
  trigger('bottom', [
    // Menu style: Rises the bottom bar to the middle while rotating it -45 deg
    state(
      'menu',
      style({
        transform: 'translateY(-8px) rotate(-45deg)',
      })
    ),
    // Default style on close
    state('close', style('*')),
    transition('* => *', animate($timing)),
  ]),
];
