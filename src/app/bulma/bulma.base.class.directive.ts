import {
  OnInit,
  Renderer2,
  ElementRef,
  Input
} from '@angular/core';

export type Viewport =
  | ''
  | 'mobile'
  | 'tablet'
  | 'tablet-only'
  | 'touch'
  | 'desktop'
  | 'desktop-only'
  | 'widescreen'
  | 'widescreen-only'
  | 'fullhd';
  
export class BulmaBaseClassDirective implements OnInit {
  className: string;

  constructor(protected render: Renderer2, protected el: ElementRef) {}

  ngOnInit(): void {
    const tag = this.el.nativeElement.tagName.toLowerCase();
    if (
      tag == 'div' ||
      tag == 'button' ||
      tag == 'input' ||
      tag == 'select' ||
      tag == 'form' ||
      tag == 'ul' ||
      tag == 'li' ||
      tag == 'img'
    ) {
      this.render.addClass(this.el.nativeElement, this.className);
    } else {
      this.el.nativeElement.childNodes[0].classList.add(this.className);
    }
  }
}

export class BulmaViewportDirective extends BulmaBaseClassDirective implements OnInit {
  vclassName: string = '';
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  @Input('viewport') viewport: Viewport = '';

  ngOnInit(): void {
    if (this.viewport) {
      this.className = `${this.vclassName}-${this.viewport}`;
    } else {
      this.className = this.vclassName;
    }
    this.ngOnInit();
  }
}
