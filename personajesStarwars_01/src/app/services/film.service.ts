import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmResponse } from '../interfaces/film.interface';


const API_BASE_URL ='https://swapi.dev/api'
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }


  public getFilm(id:String): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(`${API_BASE_URL}/film/${id}`);
  }
}
