import { Component,inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
   route:ActivatedRoute = inject(ActivatedRoute)
   housingService = inject(HousingService)
   home: Housinglocation | undefined;
   homeId = -1
   applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
   })
   constructor(){
    const homeId = parseInt(this.route.snapshot.params['id'],10)
    this.housingService.getHousingLocationById(homeId).then((home) => {
      this.home = home;
    })
   }

   ngOnInit(){
      this.submitApplication()
   }

   submitApplication(){
     this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
   }
}
