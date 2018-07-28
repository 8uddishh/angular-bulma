import {
    ElementRef,
    Renderer2,
    Component
  } from '@angular/core';
  import { BulmaBaseClassDirective } from '../bulma.base.class.directive';

  @Component({
    selector: 'bulma-level, [level]',
    template: `<ng-content></ng-content>`,
    styleUrls: []
  })
  export class BulmaLevelComponent extends BulmaBaseClassDirective {
    constructor(protected render: Renderer2, protected el: ElementRef) {
      super(render, el);
    }
  
    ngOnInit(): void {
      this.className = 'level';
      super.ngOnInit();
    }
  }

  @Component({
    selector: 'bulma-level-left, [level-left]',
    template: `<ng-content></ng-content>`,
    styleUrls: []
  })
  export class BulmaLevelLeftComponent extends BulmaBaseClassDirective {
    constructor(protected render: Renderer2, protected el: ElementRef) {
      super(render, el);
    }
  
    ngOnInit(): void {
      this.className = 'level-left';
      super.ngOnInit();
    }
  }

  @Component({
    selector: 'bulma-level-right, [level-right]',
    template: `<ng-content></ng-content>`,
    styleUrls: []
  })
  export class BulmaLevelRightComponent extends BulmaBaseClassDirective {
    constructor(protected render: Renderer2, protected el: ElementRef) {
      super(render, el);
    }
  
    ngOnInit(): void {
      this.className = 'level-right';
      super.ngOnInit();
    }
  }

  @Component({
    selector: 'bulma-level-item, [level-item]',
    template: `<ng-content></ng-content>`,
    styleUrls: []
  })
  export class BulmaLevelItemComponent extends BulmaBaseClassDirective {
    constructor(protected render: Renderer2, protected el: ElementRef) {
      super(render, el);
    }
  
    ngOnInit(): void {
      this.className = 'level-item';
      super.ngOnInit();
    }
  }