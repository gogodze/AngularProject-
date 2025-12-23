import { Injectable, signal } from '@angular/core';

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export interface Donation {
  id: string;
  amount: number;
  donorName: string;
  donorEmail: string;
  message?: string;
  createdAt: Date;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  subscribedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private contactMessages = signal<ContactMessage[]>([]);
  private donations = signal<Donation[]>([]);
  private newsletterSubscriptions = signal<NewsletterSubscription[]>([]);

  // Statistics for the homepage
  readonly stats = {
    childrenUnderCare: 234,
    donationsCollected: 50,
    fundsRaised: '34M+',
    volunteers: '400+',
    yearsOfExperience: '20+'
  };

  // Services offered
  readonly services = [
    {
      icon: 'family',
      title: 'Family support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
    },
    {
      icon: 'health',
      title: 'Health benefits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
    },
    {
      icon: 'scholarship',
      title: 'Scholarships',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
    },
    {
      icon: 'therapy',
      title: 'Therapy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
    },
    {
      icon: 'education',
      title: 'Education',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
    },
    {
      icon: 'outreach',
      title: 'Public outreach',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
    }
  ];

  // Awards data
  readonly awards = [
    { year: 2021, title: 'Best NGO Award', description: 'Details here' },
    { year: 2018, title: 'Global Award', description: 'Details here' },
    { year: 2014, title: 'CSR Award', description: 'Details here' },
    { year: 2010, title: 'NGO of the year Award', description: 'Details here' }
  ];

  // Events
  readonly events = [
    {
      date: 13,
      month: 'JAN',
      category: 'NEXT EVENTS',
      title: 'A day with our wonderful children'
    },
    {
      date: 25,
      month: 'MAR',
      category: 'NEXT EVENTS',
      title: 'Seminar: Caring for children with autism'
    }
  ];

  // For Needy page content
  readonly needyContent = [
    {
      title: 'Autism care day',
      image: 'autism-care.jpg',
      description: 'On January 25, Largerthanl has a session for autism awareness.'
    },
    {
      title: 'Downs syndrome outreach',
      image: 'downs-syndrome.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Caring for children with cerebral palsy',
      image: 'cerebral-palsy.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  // Supporters logos
  readonly supporters = [
    'Logotypexpuml',
    'Logotypexpuml',
    'logotypexpuml',
    'Logotypexpuml',
    'Logotypexpuml',
    'Logotypexpuml'
  ];

  // Team members
  readonly teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop'
    },
    {
      name: 'Jane Cooper',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop'
    },
    {
      name: 'Robert Wilson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop'
    },
    {
      name: 'Emily Davis',
      role: 'Care Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop'
    },
    {
      name: 'Michael Brown',
      role: 'Volunteer Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      role: 'Outreach Manager',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop'
    }
  ];

  constructor() {}

  // Contact form submission
  submitContactForm(data: Omit<ContactMessage, 'id' | 'createdAt'>): boolean {
    const message: ContactMessage = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    this.contactMessages.update(messages => [...messages, message]);
    console.log('Contact message submitted:', message);
    return true;
  }

  // Donation submission
  submitDonation(data: Omit<Donation, 'id' | 'createdAt'>): boolean {
    const donation: Donation = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    this.donations.update(donations => [...donations, donation]);
    console.log('Donation submitted:', donation);
    return true;
  }

  // Newsletter subscription
  subscribeNewsletter(email: string): boolean {
    const subscription: NewsletterSubscription = {
      id: Date.now().toString(),
      email: email,
      subscribedAt: new Date()
    };
    this.newsletterSubscriptions.update(subs => [...subs, subscription]);
    console.log('Newsletter subscription:', subscription);
    return true;
  }

  getContactMessages() {
    return this.contactMessages.asReadonly();
  }

  getDonations() {
    return this.donations.asReadonly();
  }

  getNewsletterSubscriptions() {
    return this.newsletterSubscriptions.asReadonly();
  }
}

