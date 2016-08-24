import {
  addProviders,
  inject
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AppState } from './app.service';

describe('AppComponent', () => {

  /*=================================
  =            MOCK INIT            =
  =================================*/

  beforeEach(() => addProviders([
    AppState,
    AppComponent
  ]));

  /*=====  End of MOCK INIT  ======*/


  it('should have a url', inject([ AppComponent ], (app) => {
    console.log(app);
    expect(app.url).toEqual('https://twitter.com/AngularClass');
  }));

});
