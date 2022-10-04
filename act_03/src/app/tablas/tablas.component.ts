import { Component, OnInit } from '@angular/core';
import { TABLA_FAKE } from '../models/fake-data';

@Component({
  selector: 'tabla',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'dateOfBirth', 'curso'];
  dataSource = TABLA_FAKE;


  constructor() { }

  ngOnInit(): void {
  }

  

}
