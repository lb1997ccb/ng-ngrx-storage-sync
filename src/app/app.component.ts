import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardFeatureModule } from './features/planet-feature/planet-feature.module';
import { StarsBackgroundComponent } from './components/stars-background/stars-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardFeatureModule, StarsBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-ngrx-storage-sync';
}
