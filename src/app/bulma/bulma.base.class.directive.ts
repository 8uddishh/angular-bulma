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
    this.render.addClass(this.el.nativeElement, this.className);
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
