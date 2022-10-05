import { Component, OnInit } from '@angular/core';
import { ServicioPokemonService } from '../servicio-pokemon.service';

@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

    listadoPokemon: [] = [];
  constructor(private pokemonservice: ServicioPokemonService) { }

  ngOnInit(): void {
    this.pokemonservice.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
    });

  }
  

}
