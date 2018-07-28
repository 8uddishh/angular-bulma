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
  @Input() role: string = '';
  constructor(protected render: Renderer2, protected el: ElementRef) {}

  @Input('aria-label') ariaLabel: string = '';

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, this.className);
    if (this.role) {
      this.render.setAttribute(this.el.nativeElement, 'role', this.role);
    }

    if (this.ariaLabel && this.ariaLabel != '') {
      this.render.setAttribute(this.el.nativeElement, 'aria-label', this.role);
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
    if (this.viewport != '') {
      this.className = `${this.vclassName}-${this.viewport}`;
    } else {
      this.className = this.vclassName;
    }
    super.ngOnInit();
  }
}
