import {
  Directive,
  ElementRef,
  Renderer2
} from '@angular/core';
import { BulmaBaseClassDirective } from './../bulma.base.class.directive';

@Directive({
  selector: '[button]'
})
export class BulmaButtonDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'button';
  }
}

@Directive({
  selector: '[primary]'
})
export class BulmaPrimaryDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-primary';
  }
}

@Directive({
  selector: '[link]'
})
export class BulmaLinkDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-link';
  }
}

@Directive({
  selector: '[info]'
})
export class BulmaInfoDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-info';
  }
}

@Directive({
  selector: '[success]'
})
export class BulmaSuccessDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-success';
  }
}

@Directive({
  selector: '[warning]'
})
export class BulmaWarningDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-warning';
  }
}

@Directive({
  selector: '[danger]'
})
export class BulmaDangerDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-danger';
  }
}

@Directive({
  selector: '[light]'
})
export class BulmaLightDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-light';
  }
}

@Directive({
  selector: '[dark]'
})
export class BulmaDarkDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-dark';
  }
}

@Directive({
  selector: '[bold]'
})
export class BulmaBoldDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-bold';
  }
}

@Directive({
  selector: '[medium]'
})
export class BulmaMediumDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-medium';
  }
}

@Directive({
  selector: '[large]'
})
export class BulmaLargeDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-large';
  }
}

@Directive({
  selector: '[fullheight]'
})
export class BulmaFullheightDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-fullheight';
  }
}
