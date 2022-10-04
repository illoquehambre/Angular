import { Component, OnInit } from '@angular/core';
import { STUDENT_FAKE } from 'src/app/models/fake-data';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentList = STUDENT_FAKE
  
  comprobarEdad(id: number){

    if (this.studentList[id].age < 18) {
      return true;
    } else {
      return false;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
