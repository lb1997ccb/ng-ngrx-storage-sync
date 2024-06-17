import {createReducer, on} from "@ngrx/store";
import {initialState} from "../types";
import {loadPlanets, loadPlanetsFailure, loadPlanetsSuccess} from "../actions/planet.actions";

export const planetReducer = createReducer(
  initialState,
  on(loadPlanets, state => ({ ...state, loading: true, error: null })),
  on(loadPlanetsSuccess, (state, { planets }) => ({ ...state, planets, loading: false })),
  on(loadPlanetsFailure, (state, { error }) => ({ ...state, error, loading: false })),
);
