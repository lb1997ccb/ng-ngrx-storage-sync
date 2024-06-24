import { Planet } from './models/planet.model';

export interface PlanetState {
  planets: Array<Planet>;
  selectedPlanet: Planet | null;
  loading: boolean;
  error: any;
}

export const initialState: PlanetState = {
  planets: [],
  selectedPlanet: null,
  loading: false,
  error: null,
};
