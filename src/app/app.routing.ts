/*===============================
=            MODULES            =
===============================*/

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

/*=====  End of MODULES  ======*/


/*==============================
=            ROUTES            =
==============================*/

const appRoutes: Routes = [
  { component: HomeComponent, path: '' },
  { component: HomeComponent, path: 'home' }
];

export const RoutingProviders: any[] = [

];

export const RoutingModule = RouterModule.forRoot(appRoutes);

/*=====  End of ROUTES  ======*/

