import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
  <app-header></app-header>
  <div style="margin-top: 5rem">
    <router-outlet></router-outlet>
  </div>
  <app-footer></app-footer>
  `
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
