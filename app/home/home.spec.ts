/*===============================
=            MODULES            =
===============================*/

import {
  addProviders,
  inject
} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AppState } from '../app.service';

/*=====  End of MODULES  ======*/


/*======================================
=            COMPONENT TEST            =
======================================*/

describe('Home', () => {
  beforeEach(() => addProviders([
    AppState,
    HomeComponent
  ]));

  it('should exist', inject([ HomeComponent ], (home) => {
    expect(home).toBeDefined();
  }));

});

/*=====  End of COMPONENT TEST  ======*/
