import {PlanetFeatureComponent} from "./planet-feature.component";
import {PlanetsComponent} from "../../components/planets/planets.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {planetReducer} from "../../../store/reducers/planet.reducer";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {PlanetEffects} from "../../../store/effects/planet.effects";

@NgModule({
  declarations: [PlanetFeatureComponent, PlanetsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('planets', planetReducer),
    EffectsModule.forFeature([PlanetEffects]),
  ],
  exports: [PlanetFeatureComponent],
})
export class DashboardFeatureModule {}
