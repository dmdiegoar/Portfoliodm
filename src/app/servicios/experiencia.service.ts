import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl = environment.urlBase;

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/proyecto/traer`);
  }

  public updateExperiencia(experiencia: Experiencia): Observable<Experiencia> {
     let id = experiencia.idProy
    return this.http.put<Experiencia>(`${this.apiServerUrl}/proyecto/edit`, experiencia);
  } 





  public addExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.apiServerUrl}/proyecto/crear`, experiencia);
  }

  public deleteExperiencia(idProy: number): Observable<void> {
    let id = idProy
    return this.http.delete<void>(`${this.apiServerUrl}/proyecto/borrar/${idProy}`);
  }
}