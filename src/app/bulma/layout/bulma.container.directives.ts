import {
  Directive,
  ElementRef,
  Input,
  Renderer,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: 'bulma-container[fluid]'
})
export class BulmaContainerFluidDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-fluid');
  }
}

@Directive({
  selector: 'bulma-container[fullhd]'
})
export class BulmaContainerFullHdDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-fullhd');
  }
}

@Directive({
  selector: 'bulma-container[widescreen]'
})
export class BulmaContainerWideScreenDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-widescreen');
  }
}
