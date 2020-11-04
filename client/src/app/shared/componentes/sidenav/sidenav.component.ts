import { Element } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @Input() links: Array<string>;
  @ViewChild('sidenav', { static: false }) sidenav?: MatSidenav;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

  }

  reemplazarLinksATitutosTabs(link: string) {
    return link.replace('-', ' ');
  }
}
