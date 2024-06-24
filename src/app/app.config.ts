import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {combineReducers, provideStore, StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import {localStorageSync} from "ngrx-store-localstorage";
import {reducers} from "../store/reducers/planet.reducer";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const localStorageSyncReducer = (reducer: any) => localStorageSync({
  keys: ['planets'],
  rehydrate: true,
  checkStorageAvailability: true
})(reducer);

export const metaReducers = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(reducers, {metaReducers}),
    importProvidersFrom(StoreModule.forRoot(combineReducers({}))),
    importProvidersFrom(EffectsModule.forRoot()),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideAnimationsAsync(),
  ],
};
