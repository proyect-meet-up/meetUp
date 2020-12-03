import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterEvent } from '@angular/router';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements OnInit {
  @Input() links: Array<string>;

  background: ThemePalette = 'primary';

  constructor(private router: Router) {}

  ngOnInit(): void {

  }


  reemplazarLinksATitutosTabs(link: string) {
    return link.replace('-', ' ');
  }
}
