import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Component({
  selector: 'bulma-media, [media]',
  template: `<ng-content></ng-content>`
})
export class BulmaMediaComponent extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = 'media';
    super.ngOnInit();
  }
}

@Component({
  selector: 'bulma-media-left, [media-left]',
  template: `<ng-content></ng-content>`
})
export class BulmaMediaLeftComponent extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = 'media-left';
    super.ngOnInit();
  }
}

@Component({
  selector: 'bulma-media-right, [media-right]',
  template: `<ng-content></ng-content>`
})
export class BulmaMediaRightComponent extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = 'media-right';
    super.ngOnInit();
  }
}

@Component({
  selector: 'bulma-media-content, [media-content]',
  template: `<ng-content></ng-content>`
})
export class BulmaMediaContentComponent extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = 'media-content';
    super.ngOnInit();
  }
}
