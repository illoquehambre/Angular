import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { Pokemon, PokemonResponse } from '../interfaces/pokemonList.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PokemonInfo } from '../interfaces/pokemonInfo.interface';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }



  getPokemonList(): Observable<PokemonResponse>{
    return this.http.get<PokemonResponse>(`${environment.API_BASE_URL}pokemon?limit=50`)
  }

  getPokemon(pokemon: Pokemon): Observable<PokemonInfo>{
    return this.http.get<PokemonInfo>(pokemon.url)

  }


}
