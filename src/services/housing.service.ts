import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Property } from '../app/property/property-list/IProperty.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class HousingService {

constructor(private http:HttpClient) { }
  getAllProperties(SellRent:number):Observable<Property[]>{
      return this.http.get<any[]>('assets/properties.json').pipe(
        map(data => {
          const propertiesArray:Property[] = [];
          for (const id in data){
            if(data.hasOwnProperty(id) && data[id].SellRent === SellRent ){   
              const property:Property = data[id]
              propertiesArray.push(property)
          }
        }
        return propertiesArray;
        })
      )
  }
}
