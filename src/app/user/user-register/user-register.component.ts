import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  imports:[FormsModule,ReactiveFormsModule,CommonModule]
})
export class UserRegisterComponent implements OnInit {
  public registrationForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName:new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.email, Validators.required]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl(null,[Validators.required]),
      mobile:new FormControl(null,[Validators.required, Validators.maxLength(10)]),
    }
    );
  }

  onSubmit(){
    console.log(this.registrationForm.value)

  }
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

}