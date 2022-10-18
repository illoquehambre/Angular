import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, People } from 'src/app/interfaces/people.interface';
import { Planets } from 'src/app/interfaces/planets.interface';
import { Species } from 'src/app/interfaces/species.interface';
import { PlanetsService } from 'src/app/services/planets.service';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {

  speciesList: Species[] = [];
  planetsList: Planets[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private speciesService: SpeciesService, private planetsService: PlanetsService) { }


  ModalPerson: People = this.data.peopleInfo
  FormGroup= new FormGroup({
    fechaNacimientoFormControl: new FormControl(this.ModalPerson.birth_year, [Validators.required]),
    especieFormControl: new FormControl(this.ModalPerson.species, [Validators.required]),
    alturaFormControl: new FormControl(this.ModalPerson.height, [Validators.required]),
    pesoFormControl: new FormControl(this.ModalPerson.mass, [Validators.required]),
    generoFormControl: new FormControl(this.ModalPerson.gender, [Validators.required]),
    colorPeloFormControl: new FormControl(this.ModalPerson.hair_color, [Validators.required]),
    colorPielFormControl: new FormControl(this.ModalPerson.skin_color, [Validators.required]),
    planetaFormControl: new FormControl(this.ModalPerson.homeworld, [Validators.required])

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
