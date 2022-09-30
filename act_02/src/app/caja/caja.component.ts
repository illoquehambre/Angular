import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  icono="expand_more"
  expansion=false
  constructor() { }

  ngOnInit(): void {
  }

  changeIcon(){
    if(this.icono=='expand_more'){
      this.icono='expand_less'
      this.expansion=true
    }else{
      this.icono='expand_more'
      this.expansion=false
    }
  }
}
