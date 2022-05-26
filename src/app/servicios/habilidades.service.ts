import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidades } from '../models/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  private apiServerUrl = environment.urlBase;

  constructor(private http: HttpClient) { }

  public getHabilidades(): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(`${this.apiServerUrl}/habilidad/traer`);
  }

  public updateHabilidades(habilidades: Habilidades): Observable<Habilidades> {
     let id = habilidades.idHab
    return this.http.put<Habilidades>(`${this.apiServerUrl}/habilidad/edit`, habilidades);
  } 





  public addHabilidades(habilidades: Habilidades): Observable<Habilidades> {
    return this.http.post<Habilidades>(`${this.apiServerUrl}/habilidad/crear`, habilidades);
  }

  public deleteHabilidades(idHab: number): Observable<void> {
    let id = idHab
    return this.http.delete<void>(`${this.apiServerUrl}/habilidad/borrar/${idHab}`);
  }
}