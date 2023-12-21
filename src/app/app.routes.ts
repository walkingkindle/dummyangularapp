import { Routes } from '@angular/router';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

export const routes:Routes = [
    {path:'add-property', component:AddPropertyComponent},
    {path:'',component:PropertyListComponent},
    {path:'property-detail/:id',component:PropertyDetailComponent},
    {path:'rent-property',component:PropertyListComponent},
    {path:'buy-property',component:PropertyListComponent},
    {path:"user/login",component:UserLoginComponent},
    {path:"user/register",component:UserRegisterComponent}
  ]