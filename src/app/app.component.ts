import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from '../services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Routes,RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,UserRegisterComponent, UserLoginComponent,FormsModule,RouterLink,RouterOutlet,RouterLinkActive,RouterModule, HttpClientModule, RouterOutlet,AddPropertyComponent,PropertyCardComponent,PropertyListComponent,NavBarComponent,PropertyDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[
    HousingService,
    UserServiceService
  ]
})
export class AppComponent {
  title = 'my-first-app';
}
