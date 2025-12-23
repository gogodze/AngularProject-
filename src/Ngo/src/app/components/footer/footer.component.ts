import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <!-- Logo & Info -->
          <div class="lg:col-span-1">
            <a routerLink="/" class="text-xl font-bold">
              largerthan<span class="text-yellow-500">i</span>
            </a>
          </div>

          <!-- Home Links -->
          <div>
            <h4 class="font-semibold mb-4">Home</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a routerLink="/about" class="hover:text-white transition-colors">About us</a></li>
              <li><a routerLink="/" class="hover:text-white transition-colors">Team</a></li>
              <li><a routerLink="/" class="hover:text-white transition-colors">What we do</a></li>
              <li><a routerLink="/contact" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- More Links -->
          <div>
            <h4 class="font-semibold mb-4">More</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a routerLink="/" class="hover:text-white transition-colors">Projects</a></li>
              <li><a routerLink="/" class="hover:text-white transition-colors">Events</a></li>
              <li><a routerLink="/" class="hover:text-white transition-colors">Donate</a></li>
              <li><a routerLink="/" class="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <!-- Connect -->
          <div>
            <h4 class="font-semibold mb-4">Connect</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" class="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div class="lg:col-span-1">
            <h4 class="font-semibold mb-4">Subscribe to get latest updates</h4>
            <div class="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                [(ngModel)]="newsletterEmail"
                placeholder="Your email"
                class="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />
              <button
                (click)="subscribeNewsletter()"
                class="px-6 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
            @if (subscriptionMessage) {
              <p class="mt-2 text-sm" [class.text-green-400]="subscriptionSuccess" [class.text-red-400]="!subscriptionSuccess">
                {{ subscriptionMessage }}
              </p>
            }
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 largerthani. All rights reserved.</p>
          <div class="flex gap-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  private dataService = inject(DataService);

  newsletterEmail = '';
  subscriptionMessage = '';
  subscriptionSuccess = false;

  subscribeNewsletter() {
    if (this.newsletterEmail && this.newsletterEmail.includes('@')) {
      this.dataService.subscribeNewsletter(this.newsletterEmail);
      this.subscriptionMessage = 'Thank you for subscribing!';
      this.subscriptionSuccess = true;
      this.newsletterEmail = '';
    } else {
      this.subscriptionMessage = 'Please enter a valid email address.';
      this.subscriptionSuccess = false;
    }
  }
}

