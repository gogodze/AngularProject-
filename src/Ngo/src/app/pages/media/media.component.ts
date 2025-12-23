import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { ButtonHoverDirective } from '../../directives/button-hover.directive';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, RouterLink, AnimateOnScrollDirective, ButtonHoverDirective],
  template: `
    <!-- Hero Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <div appAnimateOnScroll>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">FOR NEEDY</p>
            <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our goal is to provide inclusive care for children with special needs
            </h1>
            <p class="text-gray-600 mb-8">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
              ut sem vitae risus tristique posuere.
            </p>
            <a routerLink="/contact"
               appButtonHover
               class="inline-block px-8 py-3 bg-yellow-500 text-gray-900 rounded-md font-medium hover:bg-yellow-400 transition-colors">
              Read more
            </a>
          </div>

          <!-- Content Cards -->
          <div class="space-y-4" appAnimateOnScroll>
            @for (content of dataService.needyContent; track content.title) {
              <div class="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <img [src]="getContentImage($index)"
                     [alt]="content.title"
                     class="w-24 h-24 object-cover rounded-lg flex-shrink-0"/>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ content.title }}</h3>
                  <p class="text-sm text-gray-600">{{ content.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-12 bg-amber-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-20" appAnimateOnScroll>
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
          <h2 class="text-xl lg:text-2xl font-bold text-gray-900 text-center lg:text-left">
            You can contribute to provide a place for children with special needs!
          </h2>
          <div class="flex flex-wrap gap-4">
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

    <!-- Projects Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">PROJECTS WE HAVE DONE</p>
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-12" appAnimateOnScroll>
          We are creating a place where children with special needs can thrive
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects; track project.title) {
            <div class="relative rounded-xl overflow-hidden group cursor-pointer" appAnimateOnScroll>
              <img [src]="project.image"
                   [alt]="project.title"
                   class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p class="text-xs uppercase tracking-wider opacity-80 mb-1">{{ project.category }}</p>
                <h3 class="font-semibold">{{ project.title }}</h3>
                <a href="#" class="text-sm text-yellow-400 mt-2 inline-block hover:text-yellow-300">Learn more →</a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Our Events</h2>
        <div class="grid md:grid-cols-2 gap-8">
          @for (event of dataService.events; track event.title) {
            <div class="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm" appAnimateOnScroll>
              <div class="text-center bg-gray-50 p-4 rounded-lg min-w-[80px]">
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

    <!-- Gallery Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-12 text-center" appAnimateOnScroll>
          Gallery & Media
        </h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          @for (i of [1,2,3,4,5,6,7,8]; track i) {
            <div class="relative overflow-hidden rounded-lg group cursor-pointer" appAnimateOnScroll>
              <img [src]="getGalleryImage(i)"
                   alt="Gallery image"
                   class="w-full h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"/>
              <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <div class="relative rounded-2xl overflow-hidden" appAnimateOnScroll>
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200"
               alt="Video thumbnail"
               class="w-full h-80 lg:h-[500px] object-cover"/>
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button appButtonHover class="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
              <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class MediaComponent {
  dataService = inject(DataService);

  projects = [
    {
      title: 'Mission within 10 Outdoor Events',
      category: 'Mission within 10',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600'
    },
    {
      title: 'Weekly excursions',
      category: 'Weekly program',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600'
    },
    {
      title: 'Monthly public awareness',
      category: 'Monthly program',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600'
    }
  ];

  getContentImage(index: number): string {
    const images = [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200',
      'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=200',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=200'
    ];
    return images[index % images.length];
  }

  getGalleryImage(index: number): string {
    const images = [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400',
      'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=400',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
      'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=400',
      'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=400',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400'
    ];
    return images[(index - 1) % images.length];
  }
}

