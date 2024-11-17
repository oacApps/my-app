import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth/auth-service';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardActions,
    MatFormField,
    MatCardContent,
    MatCardTitle,
    MatCard
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(); // Set loggedIn to true
    this.router.navigate(['/dashboard']); // Navigate to the dashboard
  }

}
