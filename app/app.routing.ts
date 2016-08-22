import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

const appRoutes: Routes = [
  { component: HomeComponent, path: '' },
  { component: HomeComponent, path: 'home' }
];

export const RoutingProviders: any[] = [

];

export const RoutingModule = RouterModule.forRoot(appRoutes);
