/*===============================
=            MODULES            =
===============================*/

import { Injectable } from '@angular/core';
import { HmrState } from 'angular2-hmr';

/*=====  End of MODULES  ======*/


/*===============================
=            SERVICE            =
===============================*/

@Injectable()
export class AppState {
  private state: Object;

  constructor() {}

  get(prop?: any) {
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this.state[prop] = value;
  }
}

/*=====  End of SERVICE  ======*/
