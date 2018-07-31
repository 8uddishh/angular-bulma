import { Directive, ElementRef, Renderer2, Component } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Component({
  selector: 'label[bulma]',
  template: `<ng-content></ng-content>`
})
export class BulmaLabelComponent extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = 'label';
    super.ngOnInit();
  }
}

@Directive({
  selector: 'input[bulma], input[text]'
})
export class BulmaInputDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'input';
  }
}

@Directive({
  selector: 'textarea[bulma]'
})
export class BulmaTextareaDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'textarea';
  }
}

@Directive({
  selector: '[field]'
})
export class BulmaFieldDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'field';
  }
}

@Directive({
  selector: '[control]'
})
export class BulmaControlDirective extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
    this.className = 'field';
  }
}
