import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import {
  BulmaBaseClassDirective,
  BulmaViewportDirective
} from './../bulma.base.class.directive';

export type Size = '1' | '2' | '3' | '4' | '5' | '6' | '7';

@Directive({
  selector: '[text-size]'
})
export class BulmaTextSizeDirective extends BulmaViewportDirective
  implements OnInit {
  @Input('size') size: Size = '4';
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = `is-size-${this.size}`;
    super.ngOnInit();
  }
}

@Directive({
  selector: '[text-centered]'
})
export class BulmaTextCenteredDirective extends BulmaViewportDirective
  implements OnInit {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }
  ngOnInit(): void {
    this.vclassName = `has-text-centered`;
    super.ngOnInit();
  }
}

@Directive({
  selector: '[text-justified]'
})
export class BulmaTextJustifiedDirective extends BulmaViewportDirective
  implements OnInit {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }
  ngOnInit(): void {
    this.vclassName = `has-text-justified`;
    super.ngOnInit();
  }
}

@Directive({
  selector: '[text-left]'
})
export class BulmaTextLeftDirective extends BulmaViewportDirective
  implements OnInit {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }
  ngOnInit(): void {
    this.vclassName = `has-text-left`;
    super.ngOnInit();
  }
}

@Directive({
  selector: '[text-right]'
})
export class BulmaTextRightDirective extends BulmaViewportDirective
  implements OnInit {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }
  ngOnInit(): void {
    this.vclassName = `has-text-right`;
    super.ngOnInit();
  }
}

@Directive({
  selector: '[capitalized]'
})
export class BulmaCapitalizedDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-capitalized';
  }
}

@Directive({
  selector: '[lowercase]'
})
export class BulmaLowercaseDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-lowercase';
  }
}

@Directive({
  selector: '[uppercase]'
})
export class BulmaUppercaseDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-uppercase';
  }
}

@Directive({
  selector: '[italic]'
})
export class BulmaItalicDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-italic';
  }
}

@Directive({
  selector: '[text-weight-light]'
})
export class BulmaTextWeightLightDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'has-text-weight-light';
  }
}

@Directive({
  selector: '[text-weight-normal]'
})
export class BulmaTextWeightNormalDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'has-text-weight-normal';
  }
}

@Directive({
  selector: '[text-weight-semibold]'
})
export class BulmaTextWeightSemiboldDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'has-text-weight-semibold';
  }
}

@Directive({
  selector: '[text-weight-bold]'
})
export class BulmaTextWeightBoldDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'has-text-weight-bold';
  }
}
