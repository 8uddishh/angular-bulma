import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Directive({
  selector: 'table[bulma][bordered]'
})
export class BulmaBorderedDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-bordered';
  }
}

@Directive({
  selector: 'table[bulma][striped]'
})
export class BulmaStripedDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-striped';
  }
}

@Directive({
  selector: 'table[bulma][hoverable]'
})
export class BulmaHoverableDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'is-hoverable';
  }
}
