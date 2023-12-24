import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

  addUser(user: any) {
    let users: any[] = [];
  
    // Check if there are existing users in local storage
    if (localStorage.getItem('Users')) {
      // Parse existing users from local storage
      users = JSON.parse(localStorage.getItem('Users') as string);
  
      // Add the new user to the existing array
      users = [user, ...users];
    } else {
      // If no users exist in local storage, create a new array with the current user
      users = [user];
    }
  
    // Update local storage with the updated users array
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
