import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Component({
  selector: 'bulma-hero, [hero]',
  template: `<ng-content></ng-content>`
})
export class BulmaHeroComponent extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = 'hero';
    super.ngOnInit();
  }
}

@Component({
  selector: 'bulma-hero-body, [hero-body]',
  template: `<ng-content></ng-content>`
})
export class BulmaHeroBodyComponent extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = 'hero-body';
    super.ngOnInit();
  }
}

@Component({
    selector: 'bulma-hero-foot, [hero-foot]',
    template: `<ng-content></ng-content>`
  })
  export class BulmaHeroFootComponent extends BulmaBaseClassDirective {
    constructor(protected render: Renderer2, protected el: ElementRef) {
      super(render, el);
    }
  
    ngOnInit(): void {
      this.className = 'hero-foot';
      super.ngOnInit();
    }
  }
