import {Action, ActionReducerMap, createReducer, on} from '@ngrx/store';
import {initialState, PlanetState} from '../types';
import {
  loadPlanet,
  loadPlanetFailure,
  loadPlanets,
  loadPlanetsFailure,
  loadPlanetsSuccess,
  loadPlanetSuccess,
} from '../actions/planet.actions';

export const _planetReducer = createReducer(
  initialState,
  on(loadPlanets, (state) => ({ ...state, loading: true, error: null })),
  on(loadPlanetsSuccess, (state, { planets }) => ({
    ...state,
    planets,
    loading: false,
  })),
  on(loadPlanetsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(loadPlanet, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadPlanetSuccess, (state, { planet }) => {
    return {
      ...state,
      selectedPlanet: planet,
      loading: false,
      error: null,
    };
  }),
  on(loadPlanetFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
);

export function planetReducer(state: PlanetState | undefined, action: Action) {
  return _planetReducer(state, action);
}
export const reducers: ActionReducerMap<{ planets: PlanetState }> = {
  planets: planetReducer,
};
