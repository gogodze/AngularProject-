import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  id: string;
  email: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser = signal<User | null>(null);
  private isAuthenticated = signal<boolean>(false);

  constructor(private router: Router) {
    // Check for stored user on initialization
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser.set(JSON.parse(storedUser));
        this.isAuthenticated.set(true);
      }
    }
  }

  get user() {
    return this.currentUser.asReadonly();
  }

  get authenticated() {
    return this.isAuthenticated.asReadonly();
  }

  login(email: string, password: string): boolean {
    // Simulate authentication
    if (email && password.length >= 6) {
      const user: User = {
        id: '1',
        email: email,
        name: email.split('@')[0]
      };
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return true;
    }
    return false;
  }

  register(name: string, email: string, password: string): boolean {
    // Simulate registration
    if (name && email && password.length >= 6) {
      const user: User = {
        id: Date.now().toString(),
        email: email,
        name: name
      };
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
    this.router.navigate(['/']);
  }
}

