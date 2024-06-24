export interface Planet {
  id: string;
  name: string;
  englishName: string;
  isPlanet: boolean;
  moons: Array<{ moon: string }> | null;
  semimajorAxis?: number;
  perihelion?: number;
  aphelion?: number;
  eccentricity?: number;
  inclination?: number;
  mass?: {
    massValue: number;
    massExponent: number;
  };
  vol?: {
    volValue: number;
    volExponent: number;
  };
  density?: number;
  gravity?: number;
  escape?: number;
  meanRadius?: number;
  equaRadius?: number;
  polarRadius?: number;
  flattening?: number;
  dimension?: string;
  sideralOrbit?: number;
  sideralRotation?: number;
  aroundPlanet?: {
    planet: string;
    rel: string;
  };
  discoveredBy?: string;
  discoveryDate?: string;
  alternativeName?: string;
  axialTilt?: number;
  avgTemp?: number;
  mainAnomaly?: number;
  argPeriapsis?: number;
  longAscNode?: number;
  bodyType?: string;
}
