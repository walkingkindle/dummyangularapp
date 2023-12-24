import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../../services/user-service.service';
import { User } from '../../model/User';
import * as alertify from 'alertify.js'

@Component({
  standalone:true,
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  imports:[FormsModule,ReactiveFormsModule,CommonModule]
})
export class UserRegisterComponent implements OnInit {
  public registrationForm!: FormGroup;
  user:User | undefined;
  userSubmitted:boolean | undefined;
  constructor(private fb:FormBuilder,private userService:UserServiceService) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName:new FormControl(null,Validators.required),
    //   email: new FormControl(null,[Validators.email, Validators.required]),
    //   password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null,[Validators.required]),
    //   mobile:new FormControl(null,[Validators.required, Validators.maxLength(10)]),
    // }
    this.createRegistrationForm()
  }

  onSubmit(){
    console.log(this.registrationForm.value)
    this.userSubmitted = true
    if(this.registrationForm.valid){
    this.user = Object.assign(this.userData, this.registrationForm.value)
    this.userService.addUser(this.user)
    this.registrationForm.reset()
    this.userSubmitted = false;
    alertify.sucess('Congrats, you are sucessfully registered.')
    }else{
      alertify.error("Kindly provide the required keys.")
    }

  }
  userData():User{
    return this.user = {
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      confirmPassword:this.confirmPassword.value,
      mobile:this.mobile.value

    }
  }


  
  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName:[null,Validators.required],
      email:[null,[Validators.required, Validators.email]],
      password:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,Validators.required],
      mobile:[null,[Validators.required,Validators.maxLength(10)]]
    })
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
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

}