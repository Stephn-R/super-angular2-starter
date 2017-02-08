// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { RoutingModule, RoutingProviders } from './app.routing';

// ────────────────────────────────────────────────────────────────────────────────
// APP MODULE

@NgModule({
  bootstrap: [
    AppComponent
  ],

  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    RoutingModule
  ],

  providers: [
    RoutingProviders
  ]
})
export class AppModule {
  constructor() {}
}

/*=====  End of APP MODULE  ======*/

