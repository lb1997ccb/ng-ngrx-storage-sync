import {Planet} from "./models/planet.model";

export interface PlanetState {
  planets: Array<Planet>;
  loading: boolean;
  error: any;
}

export const initialState: PlanetState = {
  planets: [],
  loading: false,
  error: null,
};
