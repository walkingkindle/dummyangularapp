import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../../services/housing.service';
import { Property } from './IProperty.interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [PropertyCardComponent,CommonModule],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
    SellRent = 1
    PropertyList:Array<Property> = [];


    constructor(private route:ActivatedRoute,private housingService:HousingService){}

  ngOnInit():void{
    if(
      this.route.snapshot.url.toString() === 'buy-property'){
        this.SellRent = 2;
      }
      else{
        this.SellRent = 1;
      }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.PropertyList=data;
        console.log(this.SellRent)
        console.log(data);
      }, error =>{
        console.log(error);
      }
    )
  }
}
