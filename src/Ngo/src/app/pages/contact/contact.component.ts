import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { ButtonHoverDirective } from '../../directives/button-hover.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, AnimateOnScrollDirective, ButtonHoverDirective],
  template: `
    <!-- Hero Section -->
    <section class="py-20 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 lg:px-20">
        <div class="grid lg:grid-cols-2 gap-12">
          <div appAnimateOnScroll>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">CONTACT US</p>
            <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              We'd love to hear from you
            </h1>
            <p class="text-gray-600">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </div>

          <div class="space-y-8" appAnimateOnScroll>
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Let's Talk!</h3>
                <p class="text-gray-600">+234 09012346574</p>
                <p class="text-gray-600">info&#64;largerthani.ngo</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Headoffice</h3>
                <p class="text-gray-600">
                  8 Brewery Drive, Lagos,<br/>
                  Nigeria
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Branch Office</h3>
                <p class="text-gray-600">
                  Opeoluwa Street Iyesi, Interput, Branton
                </p>
              </div>
            </div>

            <div class="flex gap-4 pt-4">
              <a href="#" class="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-3xl mx-auto px-6 lg:px-20">
        <div class="text-center mb-12" appAnimateOnScroll>
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Send us a message</h2>
          <p class="text-gray-600">Fill in the form below and we'll get back to you as soon as possible.</p>
        </div>
        <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" class="space-y-6 bg-white p-8 rounded-2xl shadow-sm" appAnimateOnScroll>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                required
                #nameInput="ngModel"
                placeholder="Enter your name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                [class.border-red-500]="nameInput.invalid && nameInput.touched"
              />
              @if (nameInput.invalid && nameInput.touched) {
                <p class="text-red-500 text-sm mt-1">Name is required</p>
              }
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="formData.email"
                required
                email
                #emailInput="ngModel"
                placeholder="Enter your email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                [class.border-red-500]="emailInput.invalid && emailInput.touched"
              />
              @if (emailInput.invalid && emailInput.touched) {
                <p class="text-red-500 text-sm mt-1">Valid email is required</p>
              }
            </div>
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              [(ngModel)]="formData.subject"
              required
              #subjectInput="ngModel"
              placeholder="What is this about?"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              [class.border-red-500]="subjectInput.invalid && subjectInput.touched"
            />
            @if (subjectInput.invalid && subjectInput.touched) {
              <p class="text-red-500 text-sm mt-1">Subject is required</p>
            }
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              [(ngModel)]="formData.message"
              required
              #messageInput="ngModel"
              rows="6"
              placeholder="Write your message here..."
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none transition-all"
              [class.border-red-500]="messageInput.invalid && messageInput.touched"
            ></textarea>
            @if (messageInput.invalid && messageInput.touched) {
              <p class="text-red-500 text-sm mt-1">Message is required</p>
            }
          </div>

          <div class="text-center pt-4">
            <button
              type="submit"
              [disabled]="contactForm.invalid"
              appButtonHover
              class="px-12 py-4 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm">
              Send Message
            </button>
          </div>

          @if (submitMessage()) {
            <div class="text-center p-4 rounded-lg mt-4"
                 [class.bg-green-100]="submitSuccess()"
                 [class.text-green-700]="submitSuccess()"
                 [class.bg-red-100]="!submitSuccess()"
                 [class.text-red-700]="!submitSuccess()">
              {{ submitMessage() }}
            </div>
          }
        </form>
      </div>
    </section>

    <!-- Map Section -->
    <section class="h-80 lg:h-96 bg-gray-200 relative">
      <div class="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63890379965!2d3.1191195!3d6.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1703321847123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="grayscale hover:grayscale-0 transition-all duration-500">
        </iframe>
      </div>
      <div class="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
        <h4 class="font-semibold text-gray-900 mb-1">Our Location</h4>
        <p class="text-sm text-gray-600">8 Brewery Drive, Lagos, Nigeria</p>
      </div>
    </section>
  `
})
export class ContactComponent {
  private dataService = inject(DataService);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitMessage = signal('');
  submitSuccess = signal(false);

  onSubmit(form: NgForm) {
    if (form.valid) {
      const success = this.dataService.submitContactForm(this.formData);
      if (success) {
        this.submitMessage.set('Thank you! Your message has been sent successfully.');
        this.submitSuccess.set(true);
        form.reset();
      } else {
        this.submitMessage.set('Something went wrong. Please try again.');
        this.submitSuccess.set(false);
      }
    }
  }
}

