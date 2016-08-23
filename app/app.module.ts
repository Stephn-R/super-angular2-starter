import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home';
import { RoutingModule, RoutingProviders } from './app.routing';

@NgModule({
    bootstrap:    [AppComponent],
    declarations: [
      AppComponent,
      HomeComponent
    ],
    imports:      [
      BrowserModule,
      RoutingModule
    ],
    providers: [
      RoutingProviders
    ]
})
export class AppModule {}