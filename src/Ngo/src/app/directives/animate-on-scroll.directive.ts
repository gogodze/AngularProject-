import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective {
  @Input() animationClass: string = 'animate-fade-in';
  @Input() threshold: number = 0.1;

  private hasAnimated: boolean = false;

  constructor(private el: ElementRef) {
    // Initially hide the element
    this.el.nativeElement.style.opacity = '0';
    this.el.nativeElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    this.el.nativeElement.style.transform = 'translateY(20px)';
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.hasAnimated) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

    if (!(rect.bottom < 0 || rect.top - viewHeight >= -(viewHeight * this.threshold))) {
      this.animate();
    }
  }

  ngAfterViewInit() {
    // Check if element is already in view on init
    setTimeout(() => this.onScroll(), 100);
  }

  private animate() {
    this.hasAnimated = true;
    this.el.nativeElement.style.opacity = '1';
    this.el.nativeElement.style.transform = 'translateY(0)';
    this.el.nativeElement.classList.add(this.animationClass);
  }
}

