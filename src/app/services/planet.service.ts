import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Planet } from '../../store/models/planet.model';

/**
 * Service for fetching planet data from an external API.
 * This service provides methods to retrieve all planets or a specific planet by its ID.
 */
@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  /**
   * Base URL for the planets API.
   */
  private readonly apiUrl = 'https://api.le-systeme-solaire.net/rest/';

  /**
   * Constructs the PlanetService.
   * @param http The HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Fetches all planets from the API.
   * @returns An Observable of an array of Planet objects.
   */
  getPlanets(limit: number = 20): Observable<Planet[]> {
    return this.http.get<{ bodies: any[] }>(`${this.apiUrl}bodies/`).pipe(
      // Transform the API response to return an array of Planet objects
      map(
        (response) =>
          this.transformToPlanets(response.bodies)
            .filter((planet) => planet.isPlanet) // Filter planets to include only those with isPlanet: true
            .slice(0, limit), // Limit to the first 20 planets
      ),
    );
  }

  /**
   * Fetches a specific planet by its ID from the API.
   * @param id The ID of the planet to fetch.
   * @returns An Observable of a Planet object.
   */
  getPlanetById(id: string): Observable<Planet> {
    return this.http.get<any>(`${this.apiUrl}bodies/${id}`).pipe(
      // Transform the API response to a Planet object
      map(this.transformToPlanet),
    );
  }

  /**
   * Transforms raw API data to an array of Planet models.
   * @param data Array of raw planet data from the API.
   * @returns Array of Planet objects.
   */
  private transformToPlanets(data: any[]): Planet[] {
    return data.map(this.transformToPlanet);
  }

  /**
   * Transforms raw API data to a Planet model.
   * @param data Raw planet data from the API.
   * @returns A Planet object.
   */
  private transformToPlanet(data: any): Planet {
    return {
      id: data.id,
      name: data.englishName || data.name,
      isPlanet: data.isPlanet,
      moons: data.moons
        ? data.moons.map((moon: any) => ({ moon: moon.moon }))
        : null,
      semimajorAxis: data.semimajorAxis,
      perihelion: data.perihelion,
      aphelion: data.aphelion,
      eccentricity: data.eccentricity,
      inclination: data.inclination,
      mass: data.mass
        ? {
            massValue: data.mass.massValue,
            massExponent: data.mass.massExponent,
          }
        : undefined,
      vol: data.vol
        ? {
            volValue: data.vol.volValue,
            volExponent: data.vol.volExponent,
          }
        : undefined,
      density: data.density,
      gravity: data.gravity,
      escape: data.escape,
      meanRadius: data.meanRadius,
      equaRadius: data.equaRadius,
      polarRadius: data.polarRadius,
      flattening: data.flattening,
      dimension: data.dimension,
      sideralOrbit: data.sideralOrbit,
      sideralRotation: data.sideralRotation,
      aroundPlanet: data.aroundPlanet
        ? {
            planet: data.aroundPlanet.planet,
            rel: data.aroundPlanet.rel,
          }
        : undefined,
      discoveredBy: data.discoveredBy,
      discoveryDate: data.discoveryDate,
      alternativeName: data.alternativeName,
      axialTilt: data.axialTilt,
      avgTemp: data.avgTemp,
      mainAnomaly: data.mainAnomaly,
      argPeriapsis: data.argPeriapsis,
      longAscNode: data.longAscNode,
      bodyType: data.bodyType,
    } as Planet;
  }
}
