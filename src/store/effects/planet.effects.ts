import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PlanetService } from '../../app/services/planet.service';
import {
  loadPlanet,
  loadPlanetFailure,
  loadPlanets,
  loadPlanetsFailure,
  loadPlanetsSuccess,
  loadPlanetSuccess,
} from '../actions/planet.actions';

@Injectable()
export class PlanetEffects {
  // Effect to load all planets
  loadPlanets$ = createEffect(() =>
    this.actions$.pipe(
      // Listen for 'loadPlanets' action
      ofType(loadPlanets),
      mergeMap(() =>
        // Call the PlanetService to get the planets
        this.planetService.getPlanets().pipe(
          // Dispatch 'loadPlanetsSuccess' action with planets if successful
          map((planets) => loadPlanetsSuccess({ planets })),
          // Dispatch 'loadPlanetsFailure' action with error if request fails
          catchError((error) => of(loadPlanetsFailure({ error }))),
        ),
      ),
    ),
  );

  // Effect to load a single planet by ID
  loadPlanet$ = createEffect(() =>
    this.actions$.pipe(
      // Listen for 'loadPlanet' action
      ofType(loadPlanet),
      mergeMap((action) =>
        // Call the PlanetService to get the planet by ID from action payload
        this.planetService.getPlanetById(action.id).pipe(
          // Dispatch 'loadPlanetSuccess' action with planet if successful
          map((planet) => loadPlanetSuccess({ planet })),
          // Dispatch 'loadPlanetFailure' action with error if request fails
          catchError((error) => of(loadPlanetFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions, // Injects NgRx Actions service
    private planetService: PlanetService, // Injects PlanetService for API requests
  ) {}
}
