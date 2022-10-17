import { Component, OnInit } from '@angular/core';
import { PokemonInfo } from 'src/app/interfaces/pokemonInfo.interface';

import { Pokemon, PokemonResponse} from 'src/app/interfaces/pokemonList.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  pokemonList: Pokemon[]=[]
  pokemonSelected: Pokemon = {} as Pokemon;
  pokemonDetails: PokemonInfo = {} as PokemonInfo;
  
  constructor(
    private pokemonService: PokemonService,
    ) { }
    
    ngOnInit(): void {
      this.pokemonService.getPokemonList().subscribe(resp =>{
        this.pokemonList = resp.results;
      })
    }
    
    cogerPokemon() {
      if(this.pokemonSelected !== null){
        this.pokemonService.getPokemon(this.pokemonSelected).subscribe(resp =>{
          this.pokemonDetails = resp;
        })
      }
     

    }


}


