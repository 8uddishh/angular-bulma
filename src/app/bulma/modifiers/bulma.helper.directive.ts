import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Directive({
  selector: '[clearfix]'
})
export class BulmaClearFixDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-clearfix';
  }
}

@Directive({
  selector: '[pull-left]'
})
export class BulmaPullLeftDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-pulled-left';
  }
}

@Directive({
  selector: '[pull-right]'
})
export class BulmaPullRightDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-pulled-right';
  }
}

@Directive({
  selector: '[marginless]'
})
export class BulmaMarginlessDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-marginless';
  }
}

@Directive({
  selector: '[paddingless]'
})
export class BulmaPaddinglessDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-paddingless';
  }
}

@Directive({
  selector: '[overlay]'
})
export class BulmaOverlayDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-overlay';
  }
}

@Directive({
  selector: '[clipped]'
})
export class BulmaClippedDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-clipped';
  }
}

@Directive({
  selector: '[radiusless]'
})
export class BulmaRadiuslessDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-radiusless';
  }
}

@Directive({
  selector: '[shadowless]'
})
export class BulmaShadowlessDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-shadowless';
  }
}

@Directive({
  selector: '[unselectable]'
})
export class BulmaUnselectableDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-unselectable';
  }
}

@Directive({
  selector: '[invisible]'
})
export class BulmaInvisibleDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-invisible';
  }
}

@Directive({
  selector: '[sr-only]'
})
export class BulmaSrOnlyDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-sr-only';
  }
}
