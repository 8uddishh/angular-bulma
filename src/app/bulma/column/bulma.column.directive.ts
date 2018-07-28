import {
  Directive,
  ElementRef,
  Input,
  Renderer,
  OnInit,
  Renderer2
} from '@angular/core';
import { BulmaViewportDirective } from '../bulma.base.class.directive';

@Directive({
  selector: 'bulma-column[three-quarters]'
})
export class BulmaColumnThreeQuartersDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-three-quarters');
  }
}

@Directive({
  selector: 'bulma-column[two-thirds]'
})
export class BulmaColumnTwoThirdsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-two-thirds');
  }
}

@Directive({
  selector: 'bulma-column[half]'
})
export class BulmaColumnHalfDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-half');
  }
}

@Directive({
  selector: 'bulma-column[one-third]'
})
export class BulmaColumnOneThirdDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-one-third');
  }
}

@Directive({
  selector: 'bulma-column[one-quarter]'
})
export class BulmaColumnOneQuarterDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-one-quarter');
  }
}

@Directive({
  selector: 'bulma-column[four-fifths]'
})
export class BulmaColumnFourFifthsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-four-fifths');
  }
}

@Directive({
  selector: 'bulma-column[three-fifths]'
})
export class BulmaColumnThreeFifthsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-three-fifths');
  }
}

@Directive({
  selector: 'bulma-column[two-fifths]'
})
export class BulmaColumnTwoFifthsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-two-fifths');
  }
}

@Directive({
  selector: 'bulma-column[one-fifth]'
})
export class BulmaColumnOneFifthDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-one-fifth');
  }
}

@Directive({
  selector: 'bulma-column[two]'
})
export class BulmaColumnTwoDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-2');
  }
}

@Directive({
  selector: 'bulma-column[three]'
})
export class BulmaColumnThreeDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-3');
  }
}

@Directive({
  selector: 'bulma-column[four]'
})
export class BulmaColumnFourDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-4');
  }
}

@Directive({
  selector: 'bulma-column[five]'
})
export class BulmaColumnFiveDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-5');
  }
}

@Directive({
  selector: 'bulma-column[six]'
})
export class BulmaColumnSixDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-6');
  }
}

@Directive({
  selector: 'bulma-column[seven]'
})
export class BulmaColumnSevenDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-7');
  }
}

@Directive({
  selector: 'bulma-column[eight]'
})
export class BulmaColumnEightDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-8');
  }
}

@Directive({
  selector: 'bulma-column[nine]'
})
export class BulmaColumnNineDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-9');
  }
}

@Directive({
  selector: 'bulma-column[ten]'
})
export class BulmaColumnTenDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-10');
  }
}

@Directive({
  selector: 'bulma-column[eleven]'
})
export class BulmaColumnElevenDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-11');
  }
}

@Directive({
  selector: 'bulma-column[offset-three-quarters]'
})
export class BulmaColumnOffsetThreeQuartersDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-three-quarters');
  }
}

@Directive({
  selector: 'bulma-column[offset-two-thirds]'
})
export class BulmaColumnOffsetTwoThirdsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-two-thirds');
  }
}

@Directive({
  selector: 'bulma-column[offset-half]'
})
export class BulmaColumnOffsetHalfDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-half');
  }
}

@Directive({
  selector: 'bulma-column[offset-one-third]'
})
export class BulmaColumnOffsetOneThirdDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-one-third');
  }
}

@Directive({
  selector: 'bulma-column[offset-one-quarter]'
})
export class BulmaColumnOffsetOneQuarterDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-one-quarter');
  }
}

@Directive({
  selector: 'bulma-column[offset-four-fifths]'
})
export class BulmaColumnOffsetFourFifthsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-four-fifths');
  }
}

@Directive({
  selector: 'bulma-column[offset-hree-fifths]'
})
export class BulmaColumnOffsetThreeFifthsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-three-fifths');
  }
}

@Directive({
  selector: 'bulma-column[offset-two-fifths]'
})
export class BulmaColumnOffsetTwoFifthsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-two-fifths');
  }
}

@Directive({
  selector: 'bulma-column[offset-one-fifth]'
})
export class BulmaColumnOffsetOneFifthDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-one-fifth');
  }
}

@Directive({
  selector: 'bulma-column[offset-one]'
})
export class BulmaColumnOffsetOneDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-1');
  }
}

@Directive({
  selector: 'bulma-column[offset-two]'
})
export class BulmaColumnOffsetTwoDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-2');
  }
}

@Directive({
  selector: 'bulma-column[offset-three]'
})
export class BulmaColumnOffsetThreeDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-3');
    }
}

@Directive({
  selector: 'bulma-column[offset-four]'
})
export class BulmaColumnOffsetFourDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-4');
    }
}

@Directive({
  selector: 'bulma-column[offset-five]'
})
export class BulmaColumnOffsetFiveDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-5');
    }
}

@Directive({
  selector: 'bulma-column[offset-six]'
})
export class BulmaColumnOffsetSixDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-6');
    }
}

@Directive({
  selector: 'bulma-column[offset-seven]'
})
export class BulmaColumnOffsetSevenDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-7');
    }
}

@Directive({
  selector: 'bulma-column[offset-eight]'
})
export class BulmaColumnOffsetEightDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-8');
    }
}

@Directive({
  selector: 'bulma-column[offset-nine]'
})
export class BulmaColumnOffsetNineDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-9');
    }
}

@Directive({
  selector: 'bulma-column[offset-ten]'
})
export class BulmaColumnOffsetTenDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-10');
    }
}

@Directive({
  selector: 'bulma-column[offset-eleven]'
})
export class BulmaColumnoOfsetElevenDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-11');
    }
}

@Directive({
  selector: 'bulma-column[narrow]'
})
export class BulmaColumnoNarrowDirective extends BulmaViewportDirective
  implements OnInit {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = `is-narrow`;
    super.ngOnInit();
  }
}
