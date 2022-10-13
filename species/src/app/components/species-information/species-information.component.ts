import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Species } from 'src/app/interfaces/species.interface';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species-information',
  templateUrl: './species-information.component.html',
  styleUrls: ['./species-information.component.css']
})
export class SpeciesInformationComponent implements OnInit {
  id: string= '';
  speciesList : Species[]=[]
  constructor(private route: ActivatedRoute, private speciesService: SpeciesService ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.speciesService.getSpeciesList().subscribe(resp =>{
        this.speciesList = resp.results;
      })
    })


  }

}
