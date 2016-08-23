///<reference path="../typings/index.d.ts"/>

/*===============================
=            MODULES            =
===============================*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

/*=====  End of MODULES  ======*/


/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(initialHmrState?: any): Promise<any> {
  return platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
}

/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if (process.env.NODE_ENV === 'development') {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
