import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  // Simulates a login method
  login(): void {
    this.loggedIn = true;
  }

  // Simulates a logout method
  logout(): void {
    this.loggedIn = false;
  }

  // Checks if the user is logged in
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  constructor() { }
}
