import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { $animations } from './menuToggler.animations';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-menuToggler',
  templateUrl: './menuToggler.component.html',
  styleUrls: ['./menuToggler.component.scss'],
  host: { class: 'wm-toggler' },
  encapsulation: ViewEncapsulation.None,
  animations: $animations,
})
export class MenuTogglerComponent {
  @Input('toggled') set toggling(value: boolean) {
    this.toggled = coerceBooleanProperty(value);
  }
  public toggled = false;

  // @HostBinding('attr.color')
  // @Input()
  // color: ThemePalette;

  // @HostBinding('attr.toggler-style')
  @Input('toggler-style')
  style: 'menu';

  // Trigger the animations based on current style
  public get trigger() {
    return this.toggled ? this.style : 'close';
  }
}
