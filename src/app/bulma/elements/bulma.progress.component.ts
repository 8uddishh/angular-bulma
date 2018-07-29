import { ElementRef, Renderer2, Component } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Component({
  selector: 'progress[bulma]',
  template: `<ng-content></ng-content>`
})
export class BulmaProgressComponent extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = 'progress';
    super.ngOnInit();
  }
} 
