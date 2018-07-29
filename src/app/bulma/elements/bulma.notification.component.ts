import { ElementRef, Renderer2, Component } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Component({
  selector: 'bulma-notification, [notification]',
  template: `<ng-content></ng-content>`
})
export class BulmaNotificationComponent extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = 'notification';
    super.ngOnInit();
  }
} 
