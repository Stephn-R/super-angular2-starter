/*===============================
=            MODULES            =
===============================*/

import { Component, ViewEncapsulation } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';

import { getUser } from './graphs';

/*=====  End of MODULES  ======*/

console.log(getUser);


/*=====================================
=            APP COMPONENT            =
=====================================*/

@Component({
  // Use Shadow DOM encapsulation
  encapsulation: ViewEncapsulation.Native,
  selector: 'app',
  template: `
    <h1>Welcome to Super Angular 2 Webpack Starter</h1>
    <h2>{{ message }}</h2>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  message: String;

  constructor(private angularApollo : Angular2Apollo) {
    this.message = 'Loading message from server...';

    angularApollo.query(getUser('5cdc57cd-14f3-44f2-b590-39de935fcd7e'))
    .then(({ data }) => {
      this.message = `Hello, ${data.user.firstName} ${data.user.lastName}!`;
    });
  }
}

/*=====  End of APP COMPONENT  ======*/
