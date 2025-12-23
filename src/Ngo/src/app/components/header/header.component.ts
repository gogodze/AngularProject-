import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white py-4 px-6 lg:px-20 flex items-center justify-between shadow-sm fixed top-0 left-0 right-0 z-50">
      <div class="flex items-center">
        <a routerLink="/" class="text-xl font-bold text-gray-900">
          largerthan<span class="text-yellow-500">i</span>
        </a>
      </div>

      <!-- Mobile menu button -->
      <button (click)="toggleMobileMenu()" class="lg:hidden p-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path *ngIf="!mobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path *ngIf="mobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-8">
        <a routerLink="/" routerLinkActive="text-yellow-600" [routerLinkActiveOptions]="{exact: true}"
           class="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Home</a>
        <a routerLink="/about" routerLinkActive="text-yellow-600"
           class="text-gray-700 hover:text-yellow-600 transition-colors font-medium">About us</a>
        <a routerLink="/what-we-do" routerLinkActive="text-yellow-600"
           class="text-gray-700 hover:text-yellow-600 transition-colors font-medium">What We Do</a>
        <a routerLink="/media" routerLinkActive="text-yellow-600"
           class="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Media</a>
        <a routerLink="/contact" routerLinkActive="text-yellow-600"
           class="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Contact</a>
      </nav>

      <div class="hidden lg:flex items-center gap-4">
        @if (authService.authenticated()) {
          <span class="text-gray-700">Hello, {{ authService.user()?.name }}</span>
          <button (click)="authService.logout()"
                  class="px-4 py-2 text-gray-700 hover:text-yellow-600 transition-colors">
            Logout
          </button>
        } @else {
          <a routerLink="/auth"
             class="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium">
            Donate
          </a>
        }
      </div>

      <!-- Mobile Navigation -->
      <nav *ngIf="mobileMenuOpen()" class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
        <div class="flex flex-col gap-4">
          <a routerLink="/" (click)="closeMobileMenu()"
             class="text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2">Home</a>
          <a routerLink="/about" (click)="closeMobileMenu()"
             class="text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2">About us</a>
          <a routerLink="/what-we-do" (click)="closeMobileMenu()"
             class="text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2">What We Do</a>
          <a routerLink="/media" (click)="closeMobileMenu()"
             class="text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2">Media</a>
          <a routerLink="/contact" (click)="closeMobileMenu()"
             class="text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2">Contact</a>
          @if (authService.authenticated()) {
            <button (click)="authService.logout(); closeMobileMenu()"
                    class="text-left text-gray-700 hover:text-yellow-600 transition-colors py-2">
              Logout
            </button>
          } @else {
            <a routerLink="/auth" (click)="closeMobileMenu()"
               class="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium text-center">
              Donate
            </a>
          }
        </div>
      </nav>
    </header>
    <div class="h-16"></div> <!-- Spacer for fixed header -->
  `
})
export class HeaderComponent {
  authService = inject(AuthService);
  mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}

