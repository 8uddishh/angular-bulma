import { Component, ElementRef, Renderer2 } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Component({
    selector: 'bulma-footer, [footer]',
    template: `<ng-content></ng-content>`,
    styles: [`:host {
        display: block;
      }`]
  })
  export class BulmaFooterComponent extends BulmaBaseClassDirective {
    constructor(protected render: Renderer2, protected el: ElementRef) {
      super(render, el);
    }
  
    ngOnInit(): void {
      this.className = 'footer';
      super.ngOnInit();
    }
  }