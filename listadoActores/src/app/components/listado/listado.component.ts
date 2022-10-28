import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { People } from 'src/app/interfaces/listado.interface';
import { PeopleDetailResponse } from 'src/app/interfaces/people-details.interface';
import {  PeopleService } from 'src/app/services/people.service';
import { environment } from 'src/environments/environment';
import { PeopleDetailsComponent } from '../people-details/people-details.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  peopleList: People[] = []
  peopleSelected: PeopleDetailResponse = {} as PeopleDetailResponse
  numPages=0
  actualPage=1

  constructor(
    private peopleService: PeopleService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPeoplePage(1);
  }
  getPeoplePage(page:number){
    this.peopleService.getPeople(page).subscribe(resp =>{
      this.peopleList = resp.results;
      this.numPages =resp.total_pages;
      this.actualPage=page;
    })
  }
  counter(){
    return new Array(this.numPages)
  }
  
  showImg(perfil: null|string ) {    
    return `${environment.API_IMG_URL}${perfil}`;
  }
  getPeopleInfo(people: People) {
    this.peopleService.getPeopleDetail(people).subscribe(res => {
      this.peopleSelected = res;
      debugger
      this.dialog.open(PeopleDetailsComponent, {
        width:'60vw',
        height: '50vh ',
        
        data: {
          
          peopleInfo: this.peopleSelected,
          
          filmsList: people.known_for         
        },
      });
    });
  }
  
}
