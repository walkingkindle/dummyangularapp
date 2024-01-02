import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
   route:ActivatedRoute = inject(ActivatedRoute)
   housingService = inject(HousingService)
   home: Housinglocation | undefined;
   homeId = -1
   constructor(){
    this.homeId = Number(this.route.snapshot.params['id'])
    this.home = this.housingService.getHousingLocationById(this.homeId);
   }
}
