import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../../services/housing.service';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [PropertyCardComponent,CommonModule],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
    PropertyList:any | undefined;

  constructor(private housingService:HousingService){}

  ngOnInit():void{
    this.housingService.getAllProperties().subscribe(
      data=>{
        this.PropertyList=data;
        console.log(data);
      }
    )
  }
}
