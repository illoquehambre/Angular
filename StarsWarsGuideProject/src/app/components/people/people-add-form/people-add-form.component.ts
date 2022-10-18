import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/films.interface';
import { Planets } from 'src/app/interfaces/planets.interface';
import { Species } from 'src/app/interfaces/species.interface';
import { PlanetsService } from 'src/app/services/planets.service';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-people-add-form',
  templateUrl: './people-add-form.component.html',
  styleUrls: ['./people-add-form.component.css']
})
export class PeopleAddFormComponent implements OnInit {

  speciesList: Species[] = [];
  planetsList: Planets[] = [];
  fechaNacimiento = ''
  especie= ''
  altura=''
  peso=''
  genero=''
  colorPelo=''
  colorPiel=''
  planeta=''

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private speciesService: SpeciesService, private planetsService: PlanetsService) { }

  FormGroup= new FormGroup({
    fechaNacimientoFormControl: new FormControl(this.fechaNacimiento, [Validators.required]),
    especieFormControl: new FormControl(this.especie, [Validators.required]),
    alturaFormControl: new FormControl(this.altura, [Validators.required]),
    pesoFormControl: new FormControl(this.peso, [Validators.required]),
    generoFormControl: new FormControl(this.genero, [Validators.required]),
    colorPeloFormControl: new FormControl(this.colorPelo, [Validators.required]),
    colorPielFormControl: new FormControl(this.colorPiel, [Validators.required]),
    planetaFormControl: new FormControl(this.planeta, [Validators.required])

  })

  ngOnInit(): void {
    this.speciesService.getSpeciesList().subscribe(response =>
      this.speciesList = response.results);
    this.planetsService.getPlanetsList().subscribe(response =>
      this.planetsList = response.results);
  }

  onSubmit() {
    alert('se envía el formulario de login');
  }

}
