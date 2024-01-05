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
   filteredHomes:Housinglocation[] = []
  constructor(private housingService:HousingService){
  }

  ngOnInit(){
   this.housingService.getAllHousingLocations().then((homeList:Housinglocation[]) =>{
    this.homeList = homeList;
    this.filteredHomes = homeList;
   }) 
  }
  filterResults(text:string){
    if(!text){
      this.filteredHomes = this.homeList;
    }else{
      const category:Array<keyof Housinglocation> = []
      this.filteredHomes = this.homeList.filter((home) => 
        home?.city.toLowerCase().includes(text.toLowerCase())
       )
    }
  }

}
