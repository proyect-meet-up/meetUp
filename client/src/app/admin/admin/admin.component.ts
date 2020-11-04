import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  links = ['confirmar-eventos', 'reservas', 'nuevo-evento', 'historial'];
  isResponsive: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe('(max-width: 600px)')
      .subscribe( data => {
        this.isResponsive = data.matches;
        console.log('isResponsive', this.isResponsive);
      })
  }

  ngOnInit(): void {}
}
