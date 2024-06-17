import { createSelector, createFeatureSelector } from '@ngrx/store';
import {PlanetState} from "../types";

export const selectPlanetState = createFeatureSelector<PlanetState>('planets');

export const selectAllPlanets = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.planets // Stelle sicher, dass state.planets definiert ist und nicht undefined
);

export const selectPlanetsLoading = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.loading
);

export const selectPlanetsError = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.error
);
