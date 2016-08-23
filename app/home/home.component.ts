/*===============================
=            MODULES            =
===============================*/

import { Component } from '@angular/core';

/*=====  End of MODULES  ======*/


/*======================================
=            HOME COMPONENT            =
======================================*/

@Component({
  selector: 'home',
  styles:   [ require('./home.styles.scss') ],
  template: require('./home.template.html')
})
export class HomeComponent {
  constructor() {
    // stub
  }
}

/*=====  End of HOME COMPONENT  ======*/
