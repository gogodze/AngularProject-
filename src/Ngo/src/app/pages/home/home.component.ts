import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { ButtonHoverDirective } from '../../directives/button-hover.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimateOnScrollDirective, ButtonHoverDirective],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-[600px] lg:min-h-[700px] bg-cover bg-center flex items-center"
             style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920');">
      <div class="max-w-7xl mx-auto px-6 lg:px-20 py-20 text-white">
        <div class="max-w-xl">
          <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Inclusive care for children with special needs
          </h1>
          <div class="flex flex-wrap gap-4 mb-12">
            <a routerLink="/what-we-do"
               appButtonHover
               class="px-8 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors">
              What we do
            </a>
            <button class="flex items-center gap-2 px-8 py-3 border border-white rounded-md font-medium hover:bg-white/10 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
              </svg>
              Play Video
            </button>
          </div>
        </div>
        <div class="flex gap-12 lg:gap-20 text-white/80">
          <div>
            <span class="text-3xl lg:text-4xl font-bold text-white">{{ dataService.stats.childrenUnderCare }}</span>
            <p class="text-sm mt-1">Children under our care</p>
          </div>
          <div>
            <span class="text-3xl lg:text-4xl font-bold text-white">{{ dataService.stats.donationsCollected }}</span>
            <p class="text-sm mt-1">Donations collected</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div appAnimateOnScroll>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">KNOW ABOUT US</p>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We provide a place for children with special needs
            </h2>
            <p class="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
              eros elementum tristique.
            </p>
            <p class="text-gray-600 mb-8">
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam.
              Risus ipsum sit Faucibus ut porttitor enim sit amet.
              Risus et mi diam faucibus tellus nibhposuere.
            </p>
            <a routerLink="/about"
               appButtonHover
               class="inline-block px-8 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors">
              Learn more
            </a>
          </div>
          <div class="relative" appAnimateOnScroll>
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600"
                 alt="Child with special needs"
                 class="w-full h-80 lg:h-96 object-cover rounded-lg"/>
            <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
              <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Supporters Section -->
    <section class="py-12 bg-white border-t border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <p class="text-sm text-gray-500 uppercase tracking-wider mb-8">OUR SUPPORTERS</p>
        <div class="flex flex-wrap justify-between items-center gap-8 opacity-50">
          @for (supporter of dataService.supporters; track $index) {
            <div class="text-gray-400 font-semibold">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                {{ supporter }}
              </span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-amber-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <div class="grid lg:grid-cols-2 gap-12">
          <div appAnimateOnScroll>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">WHAT WE DO</p>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Some services we provide for our children
            </h2>
            <p class="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero
              eros elementum tristique.
            </p>

            <div class="space-y-6">
              @for (service of dataService.services.slice(0, 4); track service.title) {
                <div class="flex gap-4">
                  <div class="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">{{ service.title }}</h3>
                    <p class="text-sm text-gray-600">{{ service.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
          <div class="relative" appAnimateOnScroll>
            <img src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=600"
                 alt="Services"
                 class="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Donation Breakdown Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div appAnimateOnScroll>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">OUR DONATIONS</p>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              How we spend your donations and where it goes
            </h2>
            <p class="text-gray-600 mb-8">
              We understand that when you donate, you want to know exactly where your money is going and we pledge to be transparent.
            </p>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span class="text-gray-700">40% Child care and upkeep</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-4 h-4 rounded-full bg-gray-800"></div>
                <span class="text-gray-700">35% Operations</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-4 h-4 rounded-full bg-amber-200"></div>
                <span class="text-gray-700">25% Events & campaigns</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center" appAnimateOnScroll>
            <!-- Donut Chart -->
            <div class="relative w-64 h-64">
              <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
                <!-- Background circle -->
                <circle cx="50" cy="50" r="35" fill="none" stroke="#f3f4f6" stroke-width="20"/>
                <!-- 40% segment - Yellow -->
                <circle cx="50" cy="50" r="35" fill="none" stroke="#FDB913" stroke-width="20"
                        stroke-dasharray="87.96 131.95" stroke-dashoffset="0"/>
                <!-- 35% segment - Dark -->
                <circle cx="50" cy="50" r="35" fill="none" stroke="#1f2937" stroke-width="20"
                        stroke-dasharray="76.97 142.94" stroke-dashoffset="-87.96"/>
                <!-- 25% segment - Light Yellow -->
                <circle cx="50" cy="50" r="35" fill="none" stroke="#fde68a" stroke-width="20"
                        stroke-dasharray="54.98 164.93" stroke-dashoffset="-164.93"/>
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <span class="text-3xl font-bold text-gray-900">100%</span>
                  <p class="text-sm text-gray-500">Transparent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <div class="bg-amber-50 rounded-2xl p-8 lg:p-16 text-center" appAnimateOnScroll>
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            You can contribute to provide a place for children with special needs!
          </h2>
          <div class="flex flex-wrap justify-center gap-4">
            <a routerLink="/auth"
               appButtonHover
               class="px-8 py-3 bg-yellow-500 text-gray-900 rounded-md font-medium hover:bg-yellow-400 transition-colors">
              Join as a volunteer
            </a>
            <a routerLink="/auth"
               appButtonHover
               class="px-8 py-3 border border-gray-900 text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Donate
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Our Events</h2>
        <div class="grid md:grid-cols-2 gap-8">
          @for (event of dataService.events; track event.title) {
            <div class="flex items-start gap-6 p-6 bg-gray-50 rounded-xl" appAnimateOnScroll>
              <div class="text-center">
                <span class="text-4xl font-bold text-gray-900">{{ event.date }}</span>
                <p class="text-sm text-gray-500">{{ event.month }}</p>
              </div>
              <div class="flex-1">
                <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">{{ event.category }}</p>
                <h3 class="text-xl font-semibold text-gray-900">{{ event.title }}</h3>
              </div>
              <button class="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  dataService = inject(DataService);
}


