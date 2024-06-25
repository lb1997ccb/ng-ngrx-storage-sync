import { Action, ActionReducerMap, createReducer, on } from '@ngrx/store';
import { initialState, PlanetState } from '../types';
import {
  loadPlanet,
  loadPlanetFailure,
  loadPlanets,
  loadPlanetsFailure,
  loadPlanetsSuccess,
  loadPlanetSuccess,
} from '../actions/planet.actions';

/**
 * Internal reducer function for managing the state of planets.
 * @param state - The current state of the planets.
 * @param action - The action dispatched to the reducer.
 * @returns The new state of the planets after applying the action.
 */
export const _planetReducer = createReducer(
  initialState,

  // Handles the loadPlanets action, setting loading to true and clearing any previous errors.
  on(loadPlanets, (state) => ({ ...state, loading: true, error: null })),

  // Handles the loadPlanetsSuccess action, updating the state with the fetched planets and stopping the loading.
  on(loadPlanetsSuccess, (state, { planets }) => ({
    ...state,
    planets,
    loading: false,
  })),

  // Handles the loadPlanetsFailure action, updating the state with the error and stopping the loading.
  on(loadPlanetsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Handles the loadPlanet action for fetching a single planet, setting loading to true and clearing any previous errors.
  on(loadPlanet, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // Handles the loadPlanetSuccess action, updating the state with the selected planet and stopping the loading.
  on(loadPlanetSuccess, (state, { planet }) => {
    return {
      ...state,
      selectedPlanet: planet,
      loading: false,
      error: null,
    };
  }),

  // Handles the loadPlanetFailure action, updating the state with the error and stopping the loading.
  on(loadPlanetFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);

/**
 * Reducer function for the planets state.
 * @param state - The current state of the planets.
 * @param action - The action dispatched to the reducer.
 * @returns The new state of the planets after applying the action.
 */
export function planetReducer(state: PlanetState | undefined, action: Action) {
  return _planetReducer(state, action);
}

/**
 * Collection of all reducers in the application.
 * @type {ActionReducerMap<{ planets: PlanetState }>}
 */
export const reducers: ActionReducerMap<{ planets: PlanetState }> = {
  planets: planetReducer,
};
