import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

export type Color =
  | 'white'
  | 'black'
  | 'light'
  | 'dark'
  | 'primary'
  | 'info'
  | 'link'
  | 'success'
  | 'warning'
  | 'danger'
  | 'black-bis'
  | 'black-ter'
  | 'grey-darker'
  | 'grey-dark'
  | 'grey'
  | 'grey-light'
  | 'grey-lighter'
  | 'white-ter'
  | 'white-bis';

@Directive({
  selector: '[text-color]'
})
export class BulmaTextColorDirective implements OnInit {
  @Input('text-color') color: Color = 'black';
  constructor(protected render: Renderer2, protected el: ElementRef) {}

  ngOnInit(): void {
    const className = `has-text-${this.color}`;
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
      this.render.addClass(this.el.nativeElement, className);
    } else {
      this.el.nativeElement.childNodes[0].classList.add(className);
    }
  }
}

@Directive({
  selector: '[background-color]'
})
export class BulmaBackgroundColorDirective implements OnInit {
  @Input('background-color') color: Color = 'black';
  constructor(protected render: Renderer2, protected el: ElementRef) {}

  ngOnInit(): void {
    const className = `has-background-${this.color}`;
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
      this.render.addClass(this.el.nativeElement, className);
    } else {
      this.el.nativeElement.childNodes[0].classList.add(className);
    }
  }
}
