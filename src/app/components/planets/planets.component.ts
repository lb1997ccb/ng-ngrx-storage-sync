import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Planet} from "../../../store/models/planet.model";
import {Store} from "@ngrx/store";
import {selectAllPlanets, selectPlanetsError, selectPlanetsLoading} from "../../../store/selectors/planet.selectors";
import {loadPlanets} from "../../../store/actions/planet.actions";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit{
  planets$!: Observable<Planet[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store) {
    this.planets$ = this.store.select(selectAllPlanets);
    this.loading$ = this.store.select(selectPlanetsLoading);
    this.error$ = this.store.select(selectPlanetsError);
  }

  ngOnInit() {
    this.store.dispatch(loadPlanets());
  }
}
