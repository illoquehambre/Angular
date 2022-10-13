import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { Species, SpeciesResponse } from '../interfaces/species.interface';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpeciesListPg(page:number): Observable<SpeciesResponse>{
    return this.http.get<SpeciesResponse>(`${environment.API_BASE_URL}species?page=${page}`)
  }
  getSpeciesList(): Observable<SpeciesResponse>{
    return this.http.get<SpeciesResponse>(`${environment.API_BASE_URL}species`)
  }

  getSpecie(specie: Species): Observable<SpeciesResponse>{
    let id = specie.url.split('/')[5]
    return this.http.get<SpeciesResponse>(`${environment.API_BASE_URL}species/${id}`)

  }


}
