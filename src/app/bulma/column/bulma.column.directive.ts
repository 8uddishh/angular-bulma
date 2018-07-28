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
  selector: 'bulma-column[three-quarters], [column][three-quarters]'
})
export class BulmaColumnThreeQuartersDirective extends BulmaViewportDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = `is-three-quarters`;
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[two-thirds], [column][two-thirds]'
})
export class BulmaColumnTwoThirdsDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = `is-two-thirds`;
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[half], [column][half]'
})
export class BulmaColumnHalfDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = `is-half`;
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[one-third], [column][one-third]'
})
export class BulmaColumnOneThirdDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = `is-one-third`;
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[one-quarter], [column][one-quarter]'
})
export class BulmaColumnOneQuarterDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = `is-one-quarter`;
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[four-fifths], [column][four-fifths]'
})
export class BulmaColumnFourFifthsDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = `is-four-fifths`;
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[three-fifths], [column][three-fifths]'
})
export class BulmaColumnThreeFifthsDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = `is-three-fifths`;
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[two-fifths], [column][two-fifths]'
})
export class BulmaColumnTwoFifthsDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = `is-two-fifths`;
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[one-fifth], [column][one-fifth]'
})
export class BulmaColumnOneFifthDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-one-fifth';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-tile[span-one], [tile][span-one]'
})
export class BulmaColumnOneDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-1';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[span-two], [column][span-two], bulma-tile[span-two], [tile][span-two]'
})
export class BulmaColumnTwoDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-2';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[span-three], [column][span-three], bulma-tile[span-three], [tile][span-three]'
})
export class BulmaColumnThreeDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-3';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[span-four], [column][span-four], bulma-tile[span-four], [tile][span-four]'
})
export class BulmaColumnFourDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-4';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[span-five], [column][span-five], bulma-tile[span-five], [tile][span-five]'
})
export class BulmaColumnFiveDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-5';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[span-six], [column][span-six], bulma-tile[span-six], [tile][span-six]'
})
export class BulmaColumnSixDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-6';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[span-seven], [column][span-seven], bulma-tile[span-seven], [tile][span-seven]'
})
export class BulmaColumnSevenDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-7';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[span-eight], [column][span-eight], bulma-tile[span-eight], [tile][span-eight]'
})
export class BulmaColumnEightDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-8';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[span-nine], [column][span-nine], bulma-tile[span-nine], [tile][span-nine]'
})
export class BulmaColumnNineDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-9';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[span-ten], [column][span-ten], bulma-tile[span-ten], [tile][span-ten]'
})
export class BulmaColumnTenDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-10';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[span-eleven], [column][span-eleven], bulma-tile[span-eleven], [tile][span-eleven]'
})
export class BulmaColumnElevenDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-11';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-tile[span-twelve], [tile][span-twelve]'
})
export class BulmaColumnTwelveDirective extends BulmaViewportDirective  {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = 'is-12';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'bulma-column[offset-three-quarters], [column][offset-three-quarters]'
})
export class BulmaColumnOffsetThreeQuartersDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-three-quarters');
  }
}

@Directive({
  selector: 'bulma-column[offset-two-thirds], [column][offset-two-thirds]'
})
export class BulmaColumnOffsetTwoThirdsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-two-thirds');
  }
}

@Directive({
  selector: 'bulma-column[offset-half], [column][offset-half]'
})
export class BulmaColumnOffsetHalfDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-half');
  }
}

@Directive({
  selector: 'bulma-column[offset-one-third], [column][offset-one-third]'
})
export class BulmaColumnOffsetOneThirdDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-one-third');
  }
}

@Directive({
  selector: 'bulma-column[offset-one-quarter], [column][offset-one-quarter]'
})
export class BulmaColumnOffsetOneQuarterDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-one-quarter');
  }
}

@Directive({
  selector: 'bulma-column[offset-four-fifths], [column][offset-four-fifths]'
})
export class BulmaColumnOffsetFourFifthsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-four-fifths');
  }
}

@Directive({
  selector: 'bulma-column[offset-three-fifths], [column][offset-three-fifths]'
})
export class BulmaColumnOffsetThreeFifthsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-three-fifths');
  }
}

@Directive({
  selector: 'bulma-column[offset-two-fifths], [column][offset-two-fifths]'
})
export class BulmaColumnOffsetTwoFifthsDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-two-fifths');
  }
}

@Directive({
  selector: 'bulma-column[offset-one-fifth], [column][offset-one-fifth]'
})
export class BulmaColumnOffsetOneFifthDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-one-fifth');
  }
}

@Directive({
  selector: 'bulma-column[offset-one], [column][offset-one]'
})
export class BulmaColumnOffsetOneDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-1');
  }
}

@Directive({
  selector: 'bulma-column[offset-two], [column][offset-two]'
})
export class BulmaColumnOffsetTwoDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'is-offset-2');
  }
}

@Directive({
  selector: 'bulma-column[offset-three], [column][offset-three]'
})
export class BulmaColumnOffsetThreeDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-3');
    }
}

@Directive({
  selector: 'bulma-column[offset-four], [column][offset-four]'
})
export class BulmaColumnOffsetFourDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-4');
    }
}

@Directive({
  selector: 'bulma-column[offset-five], [column][offset-five]'
})
export class BulmaColumnOffsetFiveDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-5');
    }
}

@Directive({
  selector: 'bulma-column[offset-six], [column][offset-six]'
})
export class BulmaColumnOffsetSixDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-6');
    }
}

@Directive({
  selector: 'bulma-column[offset-seven], [column][offset-seven]'
})
export class BulmaColumnOffsetSevenDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-7');
    }
}

@Directive({
  selector: 'bulma-column[offset-eight], [column][offset-eight]'
})
export class BulmaColumnOffsetEightDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-8');
    }
}

@Directive({
  selector: 'bulma-column[offset-nine], [column][offset-nine]'
})
export class BulmaColumnOffsetNineDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-9');
    }
}

@Directive({
  selector: 'bulma-column[offset-ten], [column][offset-ten]'
})
export class BulmaColumnOffsetTenDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-10');
    }
}

@Directive({
  selector: 'bulma-column[offset-eleven], [column][offset-eleven]'
})
export class BulmaColumnOfsetElevenDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-offset-11');
    }
}

@Directive({
  selector: 'bulma-column[narrow], [column][offset-narrow]'
})
export class BulmaColumnNarrowDirective extends BulmaViewportDirective
  implements OnInit {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.vclassName = `is-narrow`;
    super.ngOnInit();
  }
}
