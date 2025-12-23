import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { ButtonHoverDirective } from '../../directives/button-hover.directive';

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimateOnScrollDirective, ButtonHoverDirective],
  template: `
    <!-- Hero Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div appAnimateOnScroll>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">WHAT WE DO</p>
            <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              We are working cross country
            </h1>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div appAnimateOnScroll>
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600"
                 alt="Children"
                 class="w-full h-80 object-cover rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4" appAnimateOnScroll>
          What we do for our kids with special needs
        </h2>
        <p class="text-gray-600 mb-12 max-w-2xl" appAnimateOnScroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of dataService.services; track service.title) {
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" appAnimateOnScroll>
              <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  @switch (service.icon) {
                    @case ('family') {
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    }
                    @case ('health') {
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    }
                    @case ('scholarship') {
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    }
                    @case ('therapy') {
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                    }
                    @case ('education') {
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    }
                    @default {
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                    }
                  }
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2 text-lg">{{ service.title }}</h3>
              <p class="text-sm text-gray-600">{{ service.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">PROJECTS WE HAVE DONE</p>
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-12" appAnimateOnScroll>
          We are creating a place where children with special needs can thrive
        </h2>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="relative rounded-xl overflow-hidden group cursor-pointer" appAnimateOnScroll>
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
                 alt="Education Program"
                 class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p class="text-xs uppercase tracking-wider opacity-80 mb-1">Mission within 10</p>
              <h3 class="font-semibold">Mission within 10 Outdoor Events</h3>
              <a href="#" class="text-sm text-yellow-400 mt-2 inline-block hover:text-yellow-300">Learn more →</a>
            </div>
          </div>

          <div class="relative rounded-xl overflow-hidden group cursor-pointer" appAnimateOnScroll>
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600"
                 alt="Weekly excursions"
                 class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p class="text-xs uppercase tracking-wider opacity-80 mb-1">Weekly program</p>
              <h3 class="font-semibold">Weekly excursions</h3>
              <a href="#" class="text-sm text-yellow-400 mt-2 inline-block hover:text-yellow-300">Learn more →</a>
            </div>
          </div>

          <div class="relative rounded-xl overflow-hidden group cursor-pointer" appAnimateOnScroll>
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600"
                 alt="Monthly public awareness"
                 class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p class="text-xs uppercase tracking-wider opacity-80 mb-1">Monthly program</p>
              <h3 class="font-semibold">Monthly public awareness</h3>
              <a href="#" class="text-sm text-yellow-400 mt-2 inline-block hover:text-yellow-300">Learn more →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-amber-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-20 text-center" appAnimateOnScroll>
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
    </section>

    <!-- Events Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Our Events</h2>
        <div class="grid md:grid-cols-2 gap-8">
          @for (event of dataService.events; track event.title) {
            <div class="flex items-start gap-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors" appAnimateOnScroll>
              <div class="text-center bg-white p-4 rounded-lg shadow-sm min-w-[80px]">
                <span class="text-3xl font-bold text-gray-900">{{ event.date }}</span>
                <p class="text-sm text-gray-500">{{ event.month }}</p>
              </div>
              <div class="flex-1">
                <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">{{ event.category }}</p>
                <h3 class="text-xl font-semibold text-gray-900">{{ event.title }}</h3>
              </div>
              <button appButtonHover class="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors flex-shrink-0">
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
export class WhatWeDoComponent {
  dataService = inject(DataService);
}

