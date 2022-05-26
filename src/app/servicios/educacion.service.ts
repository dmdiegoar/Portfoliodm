import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl = environment.urlBase;

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/traer`);
  }

  public updateEducacion(educacion: Educacion): Observable<Educacion> {
     let id = educacion.idEdu
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/edit`, educacion);
  } 





  public addEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/crear`, educacion);
  }

  public deleteEducacion(idEdu: number): Observable<void> {
    let id = idEdu
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/borrar/${idEdu}`);
  }
}