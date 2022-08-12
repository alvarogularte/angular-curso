import { Directive, HostListener, HostBinding, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColot;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @Input() defaultColot: string = 'white';

  @Input('appHighlight') highlightColor: string = 'yellow'

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColot;
  }
}
