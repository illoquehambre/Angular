import { Component, OnInit } from '@angular/core';
import { STUDENT_FAKE } from '../models/fake-data';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  studentList = STUDENT_FAKE
  dataSource = new MatTableDataSource(STUDENT_FAKE);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
