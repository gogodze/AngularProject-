import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { ButtonHoverDirective } from '../../directives/button-hover.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimateOnScrollDirective, ButtonHoverDirective],
  template: `
    <!-- Hero Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <div appAnimateOnScroll>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">KNOW ABOUT US</p>
            <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              We are a non-governmental organization
            </h1>
          </div>
          <div appAnimateOnScroll>
            <p class="text-lg text-gray-700 font-medium mb-4">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat. Suspendisse varius enim
              eros elementum tristique.
            </p>
          </div>
        </div>

        <!-- Video Section -->
        <div class="mt-12 relative" appAnimateOnScroll>
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200"
               alt="Team"
               class="w-full h-80 lg:h-[400px] object-cover rounded-lg"/>
          <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
            <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          </button>
        </div>

        <!-- Mission & Vision -->
        <div class="grid lg:grid-cols-2 gap-12 mt-16">
          <div appAnimateOnScroll>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">OUR MISSION</p>
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              We make sure to provide inclusive care for children with special needs
            </h2>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
              ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div appAnimateOnScroll>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">OUR VISION</p>
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Provide more inclusive care to children around the world
            </h2>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
              ut sem vitae risus tristique posuere.
            </p>
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

    <!-- Awards Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16" appAnimateOnScroll>
          Awards & Recognitions
        </h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          @for (award of dataService.awards; track award.year) {
            <div class="text-center" appAnimateOnScroll>
              <div class="w-24 h-24 mx-auto mb-4">
                <svg class="w-full h-full text-yellow-500" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 L61 35 L97 35 L68 57 L79 91 L50 70 L21 91 L32 57 L3 35 L39 35 Z"/>
                </svg>
              </div>
              <p class="text-3xl font-bold text-gray-900 mb-2">{{ award.year }}</p>
              <p class="text-gray-600">{{ award.title }}</p>
              <a href="#" class="text-sm text-gray-500 hover:text-gray-700">Details here</a>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="relative py-20 bg-cover bg-center"
             style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200');">
      <div class="max-w-7xl mx-auto px-6 lg:px-20 text-white" appAnimateOnScroll>
        <p class="text-sm uppercase tracking-wider mb-4 opacity-80">OUR JOURNEY</p>
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">How we raised 34M</h2>
        <p class="max-w-xl text-white/80 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
        </p>
        <div class="flex flex-wrap gap-12">
          <div>
            <span class="text-4xl font-bold">{{ dataService.stats.fundsRaised }}</span>
            <p class="text-sm opacity-80 mt-1">Funds raised</p>
          </div>
          <div>
            <span class="text-4xl font-bold">{{ dataService.stats.volunteers }}</span>
            <p class="text-sm opacity-80 mt-1">Volunteers</p>
          </div>
          <div>
            <span class="text-4xl font-bold">{{ dataService.stats.yearsOfExperience }}</span>
            <p class="text-sm opacity-80 mt-1">Years of experience</p>
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
  `
})
export class AboutComponent {
  dataService = inject(DataService);
}

