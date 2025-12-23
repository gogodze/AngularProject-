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
        <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">WHAT WE DO</p>
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <div appAnimateOnScroll>
            <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              We are working cross country
            </h1>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div class="hidden lg:block"></div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-12" appAnimateOnScroll>
          What we do for our kids with special needs
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of dataService.services; track service.title) {
            <div class="bg-white p-6 rounded-xl shadow-sm" appAnimateOnScroll>
              <div class="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center mb-4">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">{{ service.title }}</h3>
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
              <a href="#" class="text-sm text-yellow-400 mt-2 inline-block">Learn more →</a>
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
              <a href="#" class="text-sm text-yellow-400 mt-2 inline-block">Learn more →</a>
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
              <a href="#" class="text-sm text-yellow-400 mt-2 inline-block">Learn more →</a>
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
export class WhatWeDoComponent {
  dataService = inject(DataService);
}

