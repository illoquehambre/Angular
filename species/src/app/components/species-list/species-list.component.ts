import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/interfaces/species.interface';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {
  speciesList: Species[]=[]
  numPages=0;

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.getSpeciesPage(1)
  }

  getSpeciesPage(page:number){
    this.speciesService.getSpeciesListPg(page).subscribe(resp =>{
      this.speciesList = resp.results;
      this.numPages =Math.ceil(resp.count/10)
    })
  }

  counter(){
    return new Array(this.numPages)
  }
  modificarUrlImgSpc(specie: Species){
    
    
    let array=specie.url.split('/')
      array=array.reverse()
      let id=array[1]
  
    return 'https://starwars-visualguide.com/assets/img/species/'+id+'.jpg'
  }
}
