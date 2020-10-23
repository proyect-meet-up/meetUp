import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: "app-header-registro",
  templateUrl: "./header-registro.component.html",
  styleUrls: ["./header-registro.component.scss"],
})
export class HeaderRegistroComponent implements OnInit {


  constructor(private render: Renderer2) {}

  ngOnInit(): void {

  }
}
