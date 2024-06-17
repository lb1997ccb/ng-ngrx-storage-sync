import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {combineReducers, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(StoreModule.forRoot(combineReducers({}))),
    importProvidersFrom(EffectsModule.forRoot()),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ]
};
