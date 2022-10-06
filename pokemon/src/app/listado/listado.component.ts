import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon-response.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {

    listadoPokemon: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
    });

  }

  modificarUrl(pokemon: Pokemon){
    
    
      let array=pokemon.url.split('/')
      let id=array[6]

      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png'
  }
  

}
