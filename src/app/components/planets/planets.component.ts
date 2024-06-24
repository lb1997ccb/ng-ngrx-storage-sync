import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../../../store/models/planet.model';
import { Store } from '@ngrx/store';
import {
  selectAllPlanets,
  selectPlanetsError,
  selectPlanetsLoading,
} from '../../../store/selectors/planet.selectors';
import { loadPlanets } from '../../../store/actions/planet.actions';
import {StatePersistenceService} from "../../services/state-persistence.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit {
  planets$!: Observable<Planet[]>; // Observable to hold the list of planets
  loading$!: Observable<boolean>; // Observable to track loading state
  error$!: Observable<any>; // Observable to handle errors

  constructor(
    private store: Store, // Inject NgRx Store service to dispatch actions and select data
    private statePersistenceService: StatePersistenceService // Inject StatePersistenceService to handle state caching
  ) {
    // Initialize observables by selecting state slices using NgRx selectors
    this.planets$ = this.store.select(selectAllPlanets);
    this.loading$ = this.store.select(selectPlanetsLoading);
    this.error$ = this.store.select(selectPlanetsError);
  }

  ngOnInit(): void {
    // Check if planets are cached in local storage
    if (this.statePersistenceService.hasCachedPlanets()) {
      // Load planets state from cache if available
      this.statePersistenceService.loadPlanetsState();
      console.log('Loaded planets from cache.');
    } else {
      // Dispatch action to load planets from API if not found in cache
      this.store.dispatch(loadPlanets());
      console.log('Dispatched loadPlanets action as planets were not found in cache.');
    }
  }
}
