import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
  imports:[FormsModule,CommonModule]
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm:NgForm | undefined
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onBack(){
    this.router.navigate(['/'])
  }
  onSubmit(form:NgForm){
    console.log("Submitted!")
    console.log(this.addPropertyForm)
  }
}
