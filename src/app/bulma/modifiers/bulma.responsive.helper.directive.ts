import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { BulmaBaseClassDirective } from './../bulma.base.class.directive';

@Directive({
  selector: '[block]'
})
export class BulmaBlockDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-block';
  }
}

@Directive({
  selector: '[flex]'
})
export class BulmaFlexDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-flex';
  }
}

@Directive({
  selector: '[inline]'
})
export class BulmaInlineDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-inline';
  }
}

@Directive({
  selector: '[inline-block]'
})
export class BulmaInlineBlockDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-inline-block';
  }
}

@Directive({
  selector: '[inline-flex]'
})
export class BulmaInlineFlexDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-inline-flex';
  }
}

@Directive({
  selector: '[flex-mobile]'
})
export class BulmaFlexMobileDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-flex-mobile';
  }
}

@Directive({
  selector: '[flex-mobile-only]'
})
export class BulmaFlexTabletOnlyDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-flex-tablet-only';
  }
}

@Directive({
  selector: '[flex-desktop-only]'
})
export class BulmaFlexDesktopOnlyDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-flex-desktop-only';
  }
}

@Directive({
  selector: '[flex-widescreen-only]'
})
export class BulmaFlexWidescreenOnlyDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-flex-widescreen-only';
  }
}

@Directive({
  selector: '[flex-touch]'
})
export class BulmaFlexTouchDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-flex-touch';
  }
}

@Directive({
  selector: '[flex-tablet]'
})
export class BulmaFlexTabletDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-flex-tablet';
  }
}

@Directive({
  selector: '[flex-desktop]'
})
export class BulmaFlexDesktopDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-flex-desktop';
  }
}

@Directive({
  selector: '[flex-widescreen]'
})
export class BulmaFlexWidescreenDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-flex-widescreen';
  }
}

@Directive({
  selector: '[flex-fullhd]'
})
export class BulmaFlexFullHdDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-flex-fullhd';
  }
}

@Directive({
  selector: '[hidden-mobile]'
})
export class BulmaHiddenMobileDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-hidden-mobile';
  }
}

@Directive({
  selector: '[hidden-tablet-only]'
})
export class BulmaHiddenTabletOnlyDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-hidden-tablet-only';
  }
}

@Directive({
  selector: '[hidden-desktop-only]'
})
export class BulmaHiddenDesktopOnlyDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-hidden-desktop-only';
  }
}

@Directive({
  selector: '[hidden-widescreen-only]'
})
export class BulmaHiddenWidescreenOnlyDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-hidden-widescreen-only';
  }
}

@Directive({
  selector: '[hidden-touch]'
})
export class BulmaHiddenTouchDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-hidden-touch';
  }
}

@Directive({
  selector: '[hidden-tablet]'
})
export class BulmaHiddenTabletDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-hidden-tablet';
  }
}

@Directive({
  selector: '[hidden-desktop]'
})
export class BulmaHiddenDesktopDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-hidden-desktop';
  }
}

@Directive({
  selector: '[hidden-widescreen]'
})
export class BulmaHiddenWidescreenDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-hidden-widescreen';
  }
}

@Directive({
  selector: '[hidden-fullhd]'
})
export class BulmaHiddenFullHdirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-hidden-fullhd';
  }
}
