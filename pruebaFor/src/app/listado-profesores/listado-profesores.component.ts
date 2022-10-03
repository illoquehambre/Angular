import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listado-profesores',
  templateUrl: './listado-profesores.component.html',
  styleUrls: ['./listado-profesores.component.css']
})
export class ListadoProfesoresComponent implements OnInit {

  constructor() { }

  profesores: string[] = [
    "Miguel",
    "Luismi",
    "Angel",
    "Jesus",
    
];

  ngOnInit(): void {
    
  }

}
