# Angular NgRx Storage Sync

![Angular NgRx Storage Sync]

## Overview

The **Angular NgRx Storage Sync** project combines Angular with NgRx for advanced state management and synchronized data storage using localStorage. This project ensures seamless synchronization of application state across sessions, providing enhanced persistence and reliability for Angular applications.

## Features

- **NgRx Integration:** Utilizes NgRx for managing complex application states with predictable state management.

- **LocalStorage Synchronization:** Implements synchronized storage mechanisms like localStorage to persist application state between browser sessions.

- **Example: Persistence Service**

  The `StatePersistenceService` ensures that the application state is loaded from localStorage on initialization:

  ```typescript
  @Injectable({
    providedIn: "root",
  })
  export class StatePersistenceService {
    constructor(private store: Store<PlanetState>) {
      this.loadState();
    }

    loadState() {
      try {
        const storedState = localStorage.getItem("planets");
        if (storedState) {
          this.store.dispatch(loadPlanetsSuccess({ planets: JSON.parse(storedState).planets }));
        }
      } catch (error) {
        console.error("Error loading persisted state:", error);
      }
    }
  }
  ```

- **Example: Planets with Details**

  The PlanetDetailComponent demonstrates how to display detailed information about planets fetched from an API using NgRx:

  ```typescript
  @Component({
    selector: 'app-planet-detail',
    templateUrl: './planet-detail.component.html',
    styleUrls: ['./planet-detail.component.scss']
  })
  export class PlanetDetailComponent implements OnInit {
    planet$: Observable<Planet | null>;

    loading$: Observable<boolean>;
    error$: Observable<any>;

    constructor(
      private route: ActivatedRoute,
      private store: Store<PlanetState>
    ) {
      this.planet$ = this.store.pipe(
        select(planetSelectors.selectSelectedPlanet),
      );
      this.loading$ = this.store.pipe(
        select(planetSelectors.selectPlanetLoading),
      );
      this.error$ = this.store.pipe(select(planetSelectors.selectPlanetError));
    }

    ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        const planetId = params.get('id');
        if (planetId) {
          this.store.dispatch(planetActions.loadPlanet({ id: planetId }));
        }
      });
    }
  }
  ```

## Getting Started

To get started with **Angular NgRx Storage Sync**, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `ng serve`.

## Technologies Used

- Angular
- NgRx
- TypeScript
- HTML/CSS

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request.
