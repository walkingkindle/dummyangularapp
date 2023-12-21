import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  imports:[FormsModule,ReactiveFormsModule]
})
export class UserRegisterComponent implements OnInit {
  public registrationForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName:new FormControl('',Validators.required),
      email: new FormControl(null,[Validators.email])
    })
  }

  onSubmit(){
    console.log(this.registrationForm)
  }

}