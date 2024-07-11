import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlanetState } from '../../store/types';
import { loadPlanetsSuccess } from '../../store/actions/planet.actions';

@Injectable({
  providedIn: 'root',
})
export class StatePersistenceService {
  constructor(private store: Store<PlanetState>) {}

  /**
   * Loads the planet state from local storage and dispatches it to the store.
   */
  loadPlanetsState() {
    try {
      const storedState = localStorage.getItem('planets');
      if (storedState) {
        this.store.dispatch(
          loadPlanetsSuccess({ planets: JSON.parse(storedState).planets }),
        );
        console.log(
          'Successfully loaded and dispatched the stored planet state.',
        );
      }
    } catch (error) {
      console.error('Error loading the stored state:', error);
    }
  }

  /**
   * Checks if planets data is stored in local storage.
   * @returns {boolean} True if planets data is available in the store, otherwise false.
   */
  hasStoredPlanets(): boolean {
    return !!localStorage.getItem('planets');
  }
}
