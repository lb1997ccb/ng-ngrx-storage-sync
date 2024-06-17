export interface Planet {
  id: string;
  name: string;
  englishName: string;
  isPlanet: boolean;
  moons: Array<{ moon: string }>;
}
