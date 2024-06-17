import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Planet} from "../../store/models/planet.model";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,neq,false';

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.bodies || []) // Stelle sicher, dass bodies als Array initialisiert wird
    );
  }
}
