import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PlanetState } from '../types';

export const selectPlanetState = createFeatureSelector<PlanetState>('planets');

export const selectAllPlanets = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.planets,
);

export const selectPlanetsLoading = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.loading,
);

export const selectPlanetsError = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.error,
);

// Selektor für den ausgewählten Planeten (basierend auf der ID)
export const selectSelectedPlanet = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.selectedPlanet,
);

// Selektor für den Ladezustand (während Daten geladen werden)
export const selectPlanetLoading = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.loading,
);

// Selektor für Fehler beim Laden der Daten
export const selectPlanetError = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.error,
);
