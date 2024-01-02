import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})

export class HomeComponent {
   homeList:Housinglocation[] = []
   housingService:HousingService = inject(HousingService)
  constructor(){
    this.homeList = this.housingService.getAllHousingLocations()
  }
 

}

