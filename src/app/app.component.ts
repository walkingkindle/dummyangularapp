import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet,PropertyCardComponent,PropertyListComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[
    HousingService
  ]
})
export class AppComponent {
  title = 'my-first-app';
}
