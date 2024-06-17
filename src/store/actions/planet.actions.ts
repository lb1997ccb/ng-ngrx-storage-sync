import { createAction, props } from '@ngrx/store';
import { Planet } from '../models/planet.model';

export const loadPlanets = createAction('[Planet] Load Planets');
export const loadPlanetsSuccess = createAction('[Planet] Load Planets Success', props<{ planets: Array<Planet> }>());
export const loadPlanetsFailure = createAction('[Planet] Load Planets Failure', props<{ error: any }>());
