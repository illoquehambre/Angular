import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userEmail=''
  userPassword = ''

  loginFormGroup= new FormGroup({
    emailFormControl: new FormControl(this.userEmail, [Validators.email, Validators.required]),
    passwordFormControl: new FormControl(this.userEmail, [Validators.minLength(4), Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('se envía el formulario de login');
  }

}
