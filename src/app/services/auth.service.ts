import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;

  login() {
    this.authenticated = true; // Simular el login
  }

  logout() {
    this.authenticated = false; // Simular el logout
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
