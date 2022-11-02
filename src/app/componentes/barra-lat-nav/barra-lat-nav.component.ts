import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {faAnglesRight, faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barra-lat-nav',
  templateUrl: './barra-lat-nav.component.html',
  styleUrls: ['./barra-lat-nav.component.less']
})
export class BarraLatNavComponent implements OnInit {
  open = faAnglesRight;
  close = faXmark;

  constructor(@Inject(DOCUMENT) private dom: Document) {}

  ngOnInit(): void {}

  openNav() {
    this.dom.getElementById("mySidebar")!.style.width="270px";
  }

  closeNav() {
    this.dom.getElementById("mySidebar")!.style.width="0";
  }
}
