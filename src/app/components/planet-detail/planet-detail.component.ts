import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Planet } from '../../../store/models/planet.model';
import * as planetSelectors from '../../../store/selectors/planet.selectors';
import * as planetActions from '../../../store/actions/planet.actions';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent implements OnInit {
  planet$: Observable<Planet | null>; // Observable to hold the selected planet
  loading$: Observable<boolean>; // Observable to track loading state
  error$: Observable<any>; // Observable to handle errors
  displayedColumns: string[] = [
    // Array to define displayed table columns
    'id',
    'name',
    'englishName',
    'isPlanet',
    'mass',
    'density',
    'gravity',
    'meanRadius',
    'equaRadius',
    'polarRadius',
    'eccentricity',
    'semimajorAxis',
    'perihelion',
    'aphelion',
    'sideralOrbit',
    'sideralRotation',
  ];

  constructor(
    private route: ActivatedRoute, // Inject ActivatedRoute to access route parameters
    private store: Store, // Inject NgRx Store service to dispatch actions and select data
    private router: Router,
  ) {
    // Initialize observables by selecting state slices using selectors
    this.planet$ = this.store.pipe(
      select(planetSelectors.selectSelectedPlanet),
    );
    this.loading$ = this.store.pipe(
      select(planetSelectors.selectPlanetLoading),
    );
    this.error$ = this.store.pipe(select(planetSelectors.selectPlanetError));
  }

  ngOnInit(): void {
    // Subscribe to route parameter changes to load planet details
    this.route.paramMap.subscribe((params) => {
      const planetId = params.get('id');
      if (planetId) {
        // Dispatch 'loadPlanet' action to load planet details based on ID
        this.store.dispatch(planetActions.loadPlanet({ id: planetId }));
      }
    });
  }

  // Function to format planet's mass
  formatMass(planet: Planet): string {
    if (planet.mass && planet.mass.massValue && planet.mass.massExponent) {
      return (
        planet.mass.massValue * Math.pow(10, planet.mass.massExponent)
      ).toLocaleString();
    } else {
      return 'N/A';
    }
  }

  // Function to navigate back to the planets page
  goBackToPlanets(): void {
    this.router.navigate(['/planets']);
  }
}
