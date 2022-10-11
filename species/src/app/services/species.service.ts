import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { SpeciesResponse } from '../interfaces/species.interface';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpecie(page:number): Observable<SpeciesResponse>{
    return this.http.get<SpeciesResponse>(`${environment.API_BASE_URL}`)
  }
}
