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
  filmList:Film[]=[];
  
  constructor(
    private peopleService: PeopleService,
    private filmService: FilmService
    ) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(resp => {
      this.peopleList = resp.results;

    });
    
    this.filmService.getFilms().subscribe(resp => {
      this.filmList = resp.results;

    });
    
  }

  modificarUrlPeli(film: String){
    
    
    let array=film.split('/')
    array=array.reverse()
    let id:number=+array[1]
    let name=''
   
    
    if(id>0 && id<=3){
      id+=3
  
    }else if(id>=4 && id<=7){
      id-=3
    
    }else{
      alert("Esta peli no existe máquina")
    }
   
    this.filmList.forEach(film2 => {
        if(film2.episode_id==id){
          name=film2.title
        }
      });
      return name
     
    
    
}
modificarUrlImgPer(people: People){
    
    
  let array=people.url.split('/')
    array=array.reverse()
    let id=array[1]

  return 'https://starwars-visualguide.com/assets/img/characters/'+id+'.jpg'
}
modificarUrlImgFilm(film: String){
    
    
  let array=film.split('/')
    array=array.reverse()
    let id=array[1]

  return 'https://starwars-visualguide.com/assets/img/films/'+id+'.jpg'
}
}
