import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userEmail: string='';
  userPassword: string = '';

  loginFormGroup= new FormGroup({
    emailFormControl: new FormControl(this.userEmail, [Validators.required, Validators.email]),
    passwordFormControl: new FormControl(this.userPassword, [Validators.required, Validators.minLength(8)])
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('se envía el formulario de login');
  }

}
