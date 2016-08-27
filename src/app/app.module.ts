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

import { ApolloModule, defaultApolloClient } from 'angular2-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

import config from './app.config';

/*=====  End of MODULES  ======*/

const client = new ApolloClient({
  networkInterface: createNetworkInterface(config.API_URL)
});

/*==================================
=            APP MODULE            =
==================================*/

@NgModule({
    /*=================================
    =            BOOTSTRAP            =
    =================================*/

    bootstrap: [
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

    imports: [
      BrowserModule,
      HttpModule,
      RoutingModule,
      ApolloModule.withClient(client)
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

