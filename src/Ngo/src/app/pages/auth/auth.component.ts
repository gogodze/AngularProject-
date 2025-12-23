import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ButtonHoverDirective } from '../../directives/button-hover.directive';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ButtonHoverDirective],
  template: `
    <section class="min-h-screen bg-gray-50 py-20">
      <div class="max-w-md mx-auto px-6">
        <div class="text-center mb-8">
          <a routerLink="/" class="text-2xl font-bold text-gray-900">
            largerthan<span class="text-yellow-500">i</span>
          </a>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-8">
          <!-- Tab Switcher -->
          <div class="flex mb-8">
            <button
              (click)="activeTab.set('login')"
              [class.bg-yellow-500]="activeTab() === 'login'"
              [class.text-gray-900]="activeTab() === 'login'"
              [class.bg-gray-100]="activeTab() !== 'login'"
              [class.text-gray-600]="activeTab() !== 'login'"
              class="flex-1 py-3 px-4 rounded-l-md font-medium transition-colors">
              Login
            </button>
            <button
              (click)="activeTab.set('register')"
              [class.bg-yellow-500]="activeTab() === 'register'"
              [class.text-gray-900]="activeTab() === 'register'"
              [class.bg-gray-100]="activeTab() !== 'register'"
              [class.text-gray-600]="activeTab() !== 'register'"
              class="flex-1 py-3 px-4 rounded-r-md font-medium transition-colors">
              Register
            </button>
          </div>

          <!-- Login Form -->
          @if (activeTab() === 'login') {
            <form #loginForm="ngForm" (ngSubmit)="onLogin(loginForm)">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Welcome back!</h2>
              <p class="text-gray-600 mb-6">Sign in to your account to continue</p>

              <div class="space-y-4">
                <div>
                  <label for="loginEmail" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="loginEmail"
                    name="email"
                    [(ngModel)]="loginData.email"
                    required
                    email
                    #loginEmail="ngModel"
                    placeholder="Enter your email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    [class.border-red-500]="loginEmail.invalid && loginEmail.touched"
                  />
                  @if (loginEmail.invalid && loginEmail.touched) {
                    <p class="text-red-500 text-sm mt-1">Valid email is required</p>
                  }
                </div>

                <div>
                  <label for="loginPassword" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    id="loginPassword"
                    name="password"
                    [(ngModel)]="loginData.password"
                    required
                    minlength="6"
                    #loginPassword="ngModel"
                    placeholder="Enter your password"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    [class.border-red-500]="loginPassword.invalid && loginPassword.touched"
                  />
                  @if (loginPassword.invalid && loginPassword.touched) {
                    <p class="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>
                  }
                </div>

                <div class="flex items-center justify-between">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="remember" class="w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"/>
                    <span class="text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" class="text-sm text-yellow-600 hover:text-yellow-700">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  [disabled]="loginForm.invalid"
                  appButtonHover
                  class="w-full py-3 bg-yellow-500 text-gray-900 rounded-md font-medium hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  Sign In
                </button>
              </div>

              @if (errorMessage()) {
                <div class="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                  {{ errorMessage() }}
                </div>
              }
            </form>
          }

          <!-- Register Form -->
          @if (activeTab() === 'register') {
            <form #registerForm="ngForm" (ngSubmit)="onRegister(registerForm)">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Create an account</h2>
              <p class="text-gray-600 mb-6">Join us and make a difference</p>

              <div class="space-y-4">
                <div>
                  <label for="registerName" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="registerName"
                    name="name"
                    [(ngModel)]="registerData.name"
                    required
                    #registerName="ngModel"
                    placeholder="Enter your full name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    [class.border-red-500]="registerName.invalid && registerName.touched"
                  />
                  @if (registerName.invalid && registerName.touched) {
                    <p class="text-red-500 text-sm mt-1">Name is required</p>
                  }
                </div>

                <div>
                  <label for="registerEmail" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="registerEmail"
                    name="email"
                    [(ngModel)]="registerData.email"
                    required
                    email
                    #registerEmail="ngModel"
                    placeholder="Enter your email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    [class.border-red-500]="registerEmail.invalid && registerEmail.touched"
                  />
                  @if (registerEmail.invalid && registerEmail.touched) {
                    <p class="text-red-500 text-sm mt-1">Valid email is required</p>
                  }
                </div>

                <div>
                  <label for="registerPassword" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    id="registerPassword"
                    name="password"
                    [(ngModel)]="registerData.password"
                    required
                    minlength="6"
                    #registerPassword="ngModel"
                    placeholder="Create a password"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    [class.border-red-500]="registerPassword.invalid && registerPassword.touched"
                  />
                  @if (registerPassword.invalid && registerPassword.touched) {
                    <p class="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>
                  }
                </div>

                <div>
                  <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    [(ngModel)]="registerData.confirmPassword"
                    required
                    #confirmPassword="ngModel"
                    placeholder="Confirm your password"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    [class.border-red-500]="registerData.password !== registerData.confirmPassword && confirmPassword.touched"
                  />
                  @if (registerData.password !== registerData.confirmPassword && confirmPassword.touched) {
                    <p class="text-red-500 text-sm mt-1">Passwords do not match</p>
                  }
                </div>

                <label class="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="terms"
                    [(ngModel)]="registerData.agreeTerms"
                    required
                    class="w-4 h-4 mt-0.5 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"/>
                  <span class="text-sm text-gray-600">
                    I agree to the <a href="#" class="text-yellow-600 hover:text-yellow-700">Terms of Service</a>
                    and <a href="#" class="text-yellow-600 hover:text-yellow-700">Privacy Policy</a>
                  </span>
                </label>

                <button
                  type="submit"
                  [disabled]="registerForm.invalid || registerData.password !== registerData.confirmPassword"
                  appButtonHover
                  class="w-full py-3 bg-yellow-500 text-gray-900 rounded-md font-medium hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  Create Account
                </button>
              </div>

              @if (errorMessage()) {
                <div class="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                  {{ errorMessage() }}
                </div>
              }
            </form>
          }

          <!-- Divider -->
          <div class="my-6 flex items-center">
            <div class="flex-1 border-t border-gray-200"></div>
            <span class="px-4 text-sm text-gray-500">or continue with</span>
            <div class="flex-1 border-t border-gray-200"></div>
          </div>

          <!-- Social Login -->
          <div class="grid grid-cols-2 gap-4">
            <button class="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button class="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>

        <p class="text-center text-gray-600 mt-8">
          @if (activeTab() === 'login') {
            Don't have an account?
            <button (click)="activeTab.set('register')" class="text-yellow-600 hover:text-yellow-700 font-medium">Sign up</button>
          } @else {
            Already have an account?
            <button (click)="activeTab.set('login')" class="text-yellow-600 hover:text-yellow-700 font-medium">Sign in</button>
          }
        </p>
      </div>
    </section>
  `
})
export class AuthComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  activeTab = signal<'login' | 'register'>('login');
  errorMessage = signal('');

  loginData = {
    email: '',
    password: ''
  };

  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  };

  onLogin(form: NgForm) {
    if (form.valid) {
      const success = this.authService.login(this.loginData.email, this.loginData.password);
      if (success) {
        this.router.navigate(['/']);
      } else {
        this.errorMessage.set('Invalid email or password');
      }
    }
  }

  onRegister(form: NgForm) {
    if (form.valid && this.registerData.password === this.registerData.confirmPassword) {
      const success = this.authService.register(
        this.registerData.name,
        this.registerData.email,
        this.registerData.password
      );
      if (success) {
        this.router.navigate(['/']);
      } else {
        this.errorMessage.set('Registration failed. Please try again.');
      }
    }
  }
}

