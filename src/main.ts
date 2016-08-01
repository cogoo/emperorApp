import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { MainComponent } from './app/main';

if (environment.production) {
  enableProdMode();
}

bootstrap(MainComponent);
