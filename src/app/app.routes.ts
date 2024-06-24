import { Routes } from '@angular/router';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/planets', pathMatch: 'full' }, // Standardroute, hier auf die Liste der Planeten
  { path: 'planets', component: PlanetsComponent }, // Pfad zur Liste der Planeten
  { path: 'planet/:id', component: PlanetDetailComponent }, // Pfad zur Detailansicht eines bestimmten Planeten mit ID-Parameter
];
