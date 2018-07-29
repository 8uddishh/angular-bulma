import { ElementRef, Renderer2, Component } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Component({
  selector: 'bulma-title, [bulma-title]',
  template: `<ng-content></ng-content>`
})
export class BulmaTitleComponent extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = 'title';
    super.ngOnInit();
  }
} 

@Component({
    selector: 'bulma-subtitle, [subtitle]',
    template: `<ng-content></ng-content>`
  })
  export class BulmaSubtitleComponent extends BulmaBaseClassDirective {
    constructor(protected render: Renderer2, protected el: ElementRef) {
      super(render, el);
    }
  
    ngOnInit(): void {
      this.className = 'subtitle';
      super.ngOnInit();
    }
  } 