import {
  Directive,
  ElementRef,
  Input,
  Renderer,
  OnInit,
  Renderer2
} from '@angular/core';

export type ColumnSize = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

@Directive({
  selector: 'bulma-columns[multiline]'
})
export class BulmaColumnsMultilineDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-multiline');
  }
}

@Directive({
  selector: 'bulma-columns[centered]'
})
export class BulmaColumnsCenteredDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-centered');
  }
}

@Directive({
  selector: 'bulma-columns[gapless]'
})
export class BulmaColumnsGaplessDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-gapless');
  }
}

@Directive({
  selector: 'bulma-columns[mobile]'
})
export class BulmaColumnsMobileDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-mobile');
  }
}

@Directive({
  selector: 'bulma-columns[desktop]'
})
export class BulmaColumnsDesktopDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-desktop');
  }
}

@Directive({
  selector: 'bulma-columns[column-size]'
})
export class BulmaColumnsSizeDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}
  @Input('column-size') columnSize: ColumnSize = '2';
  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, `is-${this.columnSize}`);
  }
}
