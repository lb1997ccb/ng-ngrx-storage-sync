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


/**
 * Meta-reducer that syncs a portion of the store state to localStorage.
 * @param reducer - The base reducer to enhance with localStorage sync.
 * @returns A new reducer function that includes localStorage syncing.
 */
export const localStorageSyncReducer = (reducer: any) => localStorageSync({
  keys: ['planets'], // Specify which state keys to sync to localStorage
  rehydrate: true, // Rehydrate the state from localStorage on app load
  checkStorageAvailability: true // Ensure localStorage is available before syncing
})(reducer);

/**
 * Array of meta-reducers applied to the root reducer.
 * Meta-reducers are higher-order reducers that enhance the base reducers.
 */
export const metaReducers = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    // Provides the router service with the application's routes.
    provideRouter(routes),

    // Provides an instance of the HttpClient service for HTTP requests.
    provideHttpClient(),

    // Provides the NgRx store with reducers and metaReducers for state management.
    provideStore(reducers, { metaReducers }),

    // Imports providers from NgRx's StoreModule for setting up the root store with combined reducers.
    importProvidersFrom(StoreModule.forRoot(combineReducers({}))),

    // Imports providers from NgRx's EffectsModule for managing side effects in state management.
    importProvidersFrom(EffectsModule.forRoot()),

    // Provides the StoreDevtools module to enable developer tools for the NgRx store.
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),

    // Provides async animations support (custom function)
    provideAnimationsAsync(),
  ],
};
