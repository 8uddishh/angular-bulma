import { ElementRef, Renderer2, Component } from '@angular/core';
import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

@Component({
  selector: 'bulma-tags, [tags]',
  template: `<ng-content></ng-content>`
})
export class BulmaTagsComponent extends BulmaBaseClassDirective {
  constructor(protected render: Renderer2, protected el: ElementRef) {
    super(render, el);
  }

  ngOnInit(): void {
    this.className = 'tags';
    super.ngOnInit();
  }
} 

@Component({
    selector: 'bulma-tag, [tag]',
    template: `<ng-content></ng-content>`
  })
  export class BulmaTagComponent extends BulmaBaseClassDirective {
    constructor(protected render: Renderer2, protected el: ElementRef) {
      super(render, el);
    }
  
    ngOnInit(): void {
      this.className = 'tag';
      super.ngOnInit();
    }
  } 