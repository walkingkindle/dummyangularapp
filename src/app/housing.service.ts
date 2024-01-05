import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
    
    readonly baseUrl = 'https://angular.dev/assets/tutorials/common'
    url = 'http://localhost:3000/locations';


  async getAllHousingLocations():Promise<Housinglocation[]>{
    const data = await fetch(this.url)
    return (await data.json()) ?? []
  }

  async getHousingLocationById(id:number):Promise<Housinglocation | undefined>{
    const data = await fetch(`${this.url}/${id}`)
    return (await data.json()) ?? {};
    
  }

  submitApplication(firstName:string, lastName:string, email:string){
    console.log(
      `Home application received firstname: ${firstName}, lastname: ${lastName}, email: ${email}`
    )
  }
}
