/*===============================
=            MODULES            =
===============================*/

import { Component, ViewEncapsulation } from '@angular/core';

/*=====  End of MODULES  ======*/


/*=====================================
=            APP COMPONENT            =
=====================================*/

@Component({
  // Use Shadow DOM encapsulation
  encapsulation: ViewEncapsulation.Native,
  selector: 'app',
  template: `
    <h1>Welcome to Super Angular 2 Webpack Starter</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor() {
    // stub
  }
}

/*=====  End of APP COMPONENT  ======*/
