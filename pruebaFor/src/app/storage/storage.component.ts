import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

localData = ''

  constructor() { }

  ngOnInit(): void {
  }


  guardar(){//almacenara en el navegador
    localStorage.setItem('data', this.localData)//me permite guardar un valor simple
    alert("se ha guardao");
    this.localData= '';
  }
}
