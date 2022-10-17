import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userEmail=''
  userPassword = ''

  loginForm= new FormGroup({
    
  })
  constructor() { }

  ngOnInit(): void {
  }

}
