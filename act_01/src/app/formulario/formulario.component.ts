import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  icono='visibility_off'
  visibilidad="password"


  ngOnInit(): void {
  }

  changeIcon(){
    if(this.icono=='visibility_off'){
      this.icono='visibility'
      this.visibilidad='text'
    }else{
      this.icono='visibility_off'
      this.visibilidad='password'
    }
  }
  

}
