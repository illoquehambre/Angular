import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';
import { People } from 'src/app/interfaces/people.interface';
import { FilmService } from 'src/app/services/film.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList: People[]=[]
  encontrado=true
  constructor(
    private peopleService: PeopleService,
    private filmService: FilmService
    ) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(resp => {
      this.peopleList = resp.results;
    });
    
  }

  modificarUrl(film: Film){
    
    debugger
    let array=film.url.split('/')
    let id=array[6]
    this.filmService.getFilm(id).subscribe
    return 
}
}
