import {
  OnInit,
  Renderer2,
  ElementRef
} from '../../../node_modules/@angular/core';

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
