/*===============================
=            MODULES            =
===============================*/

import {
  addProviders,
  inject
} from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppState } from './app.service';

/*=====  End of MODULES  ======*/


/*======================================
=            COMPONENT TEST            =
======================================*/

describe('AppComponent', () => {

  beforeEach(() => addProviders([
    AppState,
    AppComponent
  ]));

  it('should exist', inject([ AppComponent ], app => {
    expect(app).toBeDefined();
  }));

});

/*=====  End of COMPONENT TEST  ======*/
