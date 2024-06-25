import { createAction, props } from '@ngrx/store';
import { Planet } from '../models/planet.model';

export const loadPlanets = createAction('[Planet] Load Planets');

export const loadState = createAction(
  '[App] Load State',
  props<{ state: any }>(),
);

export const loadPlanetsSuccess = createAction(
  '[Planet] Load Planets Success',
  props<{ planets: Array<Planet> }>(),
);

export const loadPlanetsFailure = createAction(
  '[Planet] Load Planets Failure',
  props<{ error: any }>(),
);

export const loadPlanet = createAction(
  '[Planet] Load Planet',
  props<{ id: string }>(),
);
export const loadPlanetSuccess = createAction(
  '[Planet] Load Planet Success',
  props<{ planet: Planet }>(),
);

export const loadPlanetFailure = createAction(
  '[Planet] Load Planet Failure',
  props<{ error: any }>(),
);
