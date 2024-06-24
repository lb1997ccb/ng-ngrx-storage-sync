import { PlanetFeatureComponent } from './planet-feature.component';
import { PlanetsComponent } from '../../components/planets/planets.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {planetReducer, reducers} from '../../../store/reducers/planet.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PlanetEffects } from '../../../store/effects/planet.effects';
import { RouterLink, RouterModule } from '@angular/router';
import { PlanetDetailComponent } from '../../components/planet-detail/planet-detail.component';
import {StatePersistenceService} from "../../services/state-persistence.service";
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PlanetFeatureComponent,
    PlanetsComponent,
    PlanetDetailComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    RouterModule,
    StoreModule.forFeature('planets', planetReducer),
    EffectsModule.forFeature([PlanetEffects]),
  ],
  providers: [
    StatePersistenceService
  ],
  exports: [PlanetFeatureComponent],
})
export class DashboardFeatureModule {}
