import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: "app-tab-group",
  templateUrl: "./tab-group.component.html",
  styleUrls: ["./tab-group.component.scss"],
})
export class TabGroupComponent implements OnInit {
  @Input() links: Array<string>;
  activeLink: string;
  background: ThemePalette = "primary";


  constructor() {}

  ngOnInit(): void {
    this.activeLink = this.links[0];
  }

  reemplazarLinksATitutosTabs(link: string) {
    return link.replace("-", " ");
  }
}
