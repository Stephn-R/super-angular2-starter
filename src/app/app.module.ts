/*===============================
=            MODULES            =
===============================*/

import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { AppState } from './app.service';
import { HomeComponent }   from './home';
import { RoutingModule, RoutingProviders } from './app.routing';

/*=====  End of MODULES  ======*/


/*==================================
=            APP MODULE            =
==================================*/

@NgModule({
    /*=================================
    =            BOOTSTRAP            =
    =================================*/

    bootstrap:    [
      AppComponent
    ],

    /*=====  End of BOOTSTRAP  ======*/
    /*====================================
    =            DECLARATIONS            =
    ====================================*/

    declarations: [
      AppComponent,
      HomeComponent
    ],

    /*=====  End of DECLARATIONS  ======*/
    /*===============================
    =            IMPORTS            =
    ===============================*/

    imports:      [
      BrowserModule,
      HttpModule,
      RoutingModule
    ],

    /*=====  End of IMPORTS  ======*/
    /*=================================
    =            PROVIDERS            =
    =================================*/

    providers: [
      AppState,
      RoutingProviders
    ]

    /*=====  End of PROVIDERS  ======*/
})
export class AppModule {
  constructor(public appState: AppState) {}

  hmrOnInit(store) {}
  hmrOnDestroy(store) {}
  hmrAfterDestroy(store) {}
}

/*=====  End of APP MODULE  ======*/

