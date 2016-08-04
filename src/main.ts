import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { AppComponent } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
