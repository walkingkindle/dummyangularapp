import { Component, Input } from "@angular/core";
import { Property } from "../property-list/IProperty.interface";
import { RouterLink, RouterModule } from "@angular/router";

@Component(
    {
        imports:[RouterModule,RouterLink],
        standalone:true,
        selector:'app-property-card',
        templateUrl:'property-card.component.html',
        styleUrls:['property-card.component.css']
    }
)
export class PropertyCardComponent {
   @Input()
    property!: Property;

}