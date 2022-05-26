import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idiomas } from '../models/idiomas';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {
  private apiServerUrl = environment.urlBase;

  constructor(private http: HttpClient) { }

  public getIdiomas(): Observable<Idiomas[]> {
    return this.http.get<Idiomas[]>(`${this.apiServerUrl}/idioma/traer`);
  }

  public updateIdiomas(idiomas: Idiomas): Observable<Idiomas> {
     let id = idiomas.idIdioma
    return this.http.put<Idiomas>(`${this.apiServerUrl}/idioma/edit`, idiomas);
  } 





  public addIdiomas(idiomas: Idiomas): Observable<Idiomas> {
    return this.http.post<Idiomas>(`${this.apiServerUrl}/idioma/crear`, idiomas);
  }

  public deleteIdiomas(idIdioma: number): Observable<void> {
    let id = idIdioma
    return this.http.delete<void>(`${this.apiServerUrl}/idioma/borrar/${idIdioma}`);
  }
}