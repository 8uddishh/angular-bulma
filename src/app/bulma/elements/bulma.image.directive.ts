import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Directive({
  selector: '[image][size-16x16]'
})
export class BulmaSize16x16Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-16x16';
  }
}

@Directive({
  selector: '[image][size-24x24]'
})
export class BulmaSize24x24Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-24x24';
  }
}

@Directive({
  selector: '[image][size-32x32]'
})
export class BulmaSize32x32Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-32x32';
  }
}

@Directive({
  selector: '[image][size-48x48]'
})
export class BulmaSize48x48Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-48x48';
  }
}

@Directive({
  selector: '[image][size-64x64]'
})
export class BulmaSize64x64Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-64x64';
  }
}

@Directive({
  selector: '[image][size-96x96]'
})
export class BulmaSize96x96Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-96x96';
  }
}

@Directive({
  selector: '[image][size-128x128]'
})
export class BulmaSize128x128Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-128x128';
  }
}

@Directive({
  selector: '[image][square]'
})
export class BulmaSquareDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-square';
  }
}

@Directive({
  selector: '[image][size-1by1]'
})
export class BulmaSize1By1Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-1by1';
  }
}

@Directive({
  selector: '[image][size-5by4]'
})
export class BulmaSize5by4Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-5by4';
  }
}

@Directive({
  selector: '[image][size-4by3]'
})
export class BulmaSize4by3Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-4by3';
  }
}

@Directive({
  selector: '[image][size-3by2]'
})
export class BulmaSize3by2Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-3by2';
  }
}

@Directive({
  selector: '[image][size-5by3]'
})
export class BulmaSize5by3Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-5by3';
  }
}

@Directive({
  selector: '[image][size-16by9]'
})
export class BulmaSize16by9Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-16by9';
  }
}

@Directive({
  selector: '[image][size-2by1]'
})
export class BulmaSize2by1Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-2by1';
  }
}

@Directive({
  selector: '[image][size-3by1]'
})
export class BulmaSize3by1Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-3by1';
  }
}

@Directive({
  selector: '[image][size-4by5]'
})
export class BulmaSize4by5Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-4by5';
  }
}

@Directive({
  selector: '[image][size-3by4]'
})
export class BulmaSize3by4Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-3by4';
  }
}

@Directive({
  selector: '[image][size-2by3]'
})
export class BulmaSize2by3Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-2by3';
  }
}

@Directive({
  selector: '[image][size-3by5]'
})
export class BulmaSize3by5Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-3by5';
  }
}

@Directive({
  selector: '[image][size-9by16]'
})
export class BulmaSize9by16Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-9by16';
  }
}

@Directive({
  selector: '[image][size-1by2]'
})
export class BulmaSize1by2Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-1by2';
  }
}

@Directive({
  selector: '[image][size-1by3]'
})
export class BulmaSize1by3Directive extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-1by3';
  }
}
