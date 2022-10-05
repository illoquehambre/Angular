import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_BASE_URL = 'https://pokeapi.co/api/v2'

@Injectable({
  providedIn: 'root'
})
export class ServicioPokemonService {

  constructor(private http: HttpClient) { }

  public pokemonList(): Observable<PokemonResponse>{//observable es un encapsulador que se queda observando cuando llega el dato de una petición asincrona
    return this.http.get<PokemonResponse>(`${API_BASE_URL}/pokemon`)
  }

  public getPokemon(id: string){
    return this.http.get(`${API_BASE_URL}/pokemon/${id}`)
  }
}
