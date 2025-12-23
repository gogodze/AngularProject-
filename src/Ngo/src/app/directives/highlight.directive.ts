import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight: string = '#FDB913';
  @Input() highlightOnHover: boolean = true;

  private originalBackground: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.originalBackground = this.el.nativeElement.style.backgroundColor;

    if (this.highlightOnHover) {
      this.el.nativeElement.addEventListener('mouseenter', () => {
        this.el.nativeElement.style.backgroundColor = this.appHighlight;
      });

      this.el.nativeElement.addEventListener('mouseleave', () => {
        this.el.nativeElement.style.backgroundColor = this.originalBackground;
      });
    } else {
      this.el.nativeElement.style.backgroundColor = this.appHighlight;
    }
  }
}

