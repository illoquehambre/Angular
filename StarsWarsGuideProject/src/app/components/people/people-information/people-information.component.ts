import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, People } from 'src/app/interfaces/people.interface';
import { Planets } from 'src/app/interfaces/planets.interface';
import { Species } from 'src/app/interfaces/species.interface';
import { PlanetsService } from 'src/app/services/planets.service';
import { SpeciesService } from 'src/app/services/species.service';
import { PeopleFormComponent } from '../people-form/people-form.component';

@Component({
  selector: 'app-people-information',
  templateUrl: './people-information.component.html',
  styleUrls: ['./people-information.component.css']
})
export class PeopleInformationComponent implements OnInit {

  speciesList: Species[] = [];
  planetsList: Planets[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private speciesService: SpeciesService, private planetsService: PlanetsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.speciesService.getSpeciesList().subscribe(response =>
      this.speciesList = response.results);
    this.planetsService.getPlanetsList().subscribe(response =>
      this.planetsList = response.results);
  }

  showSpecieOfPeople(p: People, s: Species) {
    for (let specie of p.species) {
      if (specie == s.url) {
        return true;
      }
    }
    return false;
  }

  checkHomeworld(pe: People, pl: Planets) {
    if (pe.homeworld == pl.url) {
      return true;
    } else {
      return false;
    }
  }

  changePeople() {
      this.dialog.open(PeopleFormComponent, {
        width: '80%',
        data: {
          peopleInfo: this.data.peopleInfo,
          background: 'https://srunners.com/wp-content/uploads/2020/04/fondos-de-star-wars-min-1024x576.jpg',
          color: '#FFF'
        }
        
      })
      
    }
}
