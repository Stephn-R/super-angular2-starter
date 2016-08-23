/*===============================
=            MODULES            =
===============================*/

import { Component } from '@angular/core';

/*=====  End of MODULES  ======*/


/*=====================================
=            APP COMPONENT            =
=====================================*/

@Component({
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
