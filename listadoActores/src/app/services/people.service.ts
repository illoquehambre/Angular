import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListadoResponse, People } from '../interfaces/listado.interface';
import { environment } from 'src/environments/environment';
import { PeopleDetailResponse } from '../interfaces/people-details.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }



  getPeople(page: number): Observable<ListadoResponse>{
    return this.http.get<ListadoResponse>(
      `${environment.API_BASE_URL}person/popular?api_key=${environment.api_key}&language=en-US&page=${page}`
    );
  }

  getPeopleDetail(people: People): Observable<PeopleDetailResponse>{
    return this.http.get<PeopleDetailResponse>(
      `${environment.API_BASE_URL}person/${people.id}?api_key=${environment.api_key}&language=en-US`
    );
  }
 
}
