import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DashboardFeatureModule} from "./features/planet-feature/planet-feature.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardFeatureModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-solar-system';
}
