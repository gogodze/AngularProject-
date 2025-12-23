import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButtonHover]',
  standalone: true
})
export class ButtonHoverDirective {
  @Input() hoverScale: number = 1.05;
  @Input() hoverShadow: boolean = true;

  private originalTransform: string = '';
  private originalBoxShadow: string = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.originalTransform = this.el.nativeElement.style.transform;
    this.originalBoxShadow = this.el.nativeElement.style.boxShadow;

    this.el.nativeElement.style.transform = `scale(${this.hoverScale})`;
    if (this.hoverShadow) {
      this.el.nativeElement.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.transform = this.originalTransform || 'scale(1)';
    this.el.nativeElement.style.boxShadow = this.originalBoxShadow || 'none';
  }
}

