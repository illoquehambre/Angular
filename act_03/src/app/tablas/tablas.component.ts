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
  binding=true

  constructor() { }

  ngOnInit(): void {
  }

  agragarOBorrarColumna(nmb:string){
    if(this.displayedColumns.includes(nmb)){
      debugger;
      var id = this.displayedColumns.indexOf(nmb)
     
      this.displayedColumns.splice(id, 1)
    }else{
      this.displayedColumns.push(nmb)
    }
    
  
  }

  

}
