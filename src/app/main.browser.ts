// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// ────────────────────────────────────────────────────────────────────────────────

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
}

// bootstrap when document is ready
document.addEventListener('DOMContentLoaded', () => main());
