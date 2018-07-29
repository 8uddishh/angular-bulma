import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Directive({
  selector: '[buttons]'
})
export class BulmaButtonsDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'buttons';
  }
}

@Directive({
  selector:
    'a[button], button[button], span[button], input[type=submit][button], input[type=reset][button]'
})
export class BulmaButtonDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'button';
  }
}

@Directive({
  selector: '[fullwidth]'
})
export class BulmaFullwidthDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-fullwidth';
  }
}

@Directive({
  selector: '[outlined]'
})
export class BulmaOutlinedDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-outlined';
  }
}

@Directive({
  selector: '[inverted]'
})
export class BulmaInvertedDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-inverted';
  }
}

@Directive({
  selector: '[rounded]'
})
export class BulmaRoundedDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-rounded';
  }
}

@Directive({
  selector: '[hovered]'
})
export class BulmaHoveredDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-hovered';
  }
}

@Directive({
  selector: '[focused]'
})
export class BulmaFocusedDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-focused';
  }
}

@Directive({
  selector: '[active]'
})
export class BulmaActiveDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-active';
  }
}

@Directive({
  selector: '[loading]'
})
export class BulmaLoadingDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-loading';
  }
}

@Directive({
  selector: '[static]'
})
export class BulmaStaticDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-static';
  }
}

@Directive({
  selector: '[delete]'
})
export class BulmaDeleteDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'delete';
  }
}

@Directive({
  selector: '[icon]'
})
export class BulmaIconDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'icon';
  }
}
