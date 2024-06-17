import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PlanetService } from '../../app/services/planet.service';
import {loadPlanets, loadPlanetsFailure, loadPlanetsSuccess} from "../actions/planet.actions"; // adjust import based on your file structure

@Injectable()
export class PlanetEffects {

  loadPlanets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlanets),
      mergeMap(() =>
        this.planetService.getPlanets().pipe(
          map(planets => loadPlanetsSuccess({ planets })),
          catchError(error => of(loadPlanetsFailure({ error })))
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private planetService: PlanetService
  ) {}
}
