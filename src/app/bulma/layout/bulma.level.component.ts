import {
    Directive,
    ElementRef,
    Input,
    Renderer,
    OnInit,
    Renderer2,
    Component
  } from '@angular/core';

  @Component({
    selector: 'bulma-level',
    template: `<ng-content></ng-content>`,
    styleUrls: []
  })
  export class BulmaLevelComponent implements OnInit {
    @Input() role: string = '';
    constructor(private el: ElementRef, private render: Renderer2) {}
  
    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'level');
      if (this.role) {
        this.render.setAttribute(this.el.nativeElement, 'role', this.role);
      }
    }
  }

  @Component({
    selector: 'bulma-level-left',
    template: `<ng-content></ng-content>`,
    styleUrls: []
  })
  export class BulmaLevelLeftComponent implements OnInit {
    @Input() role: string = '';
    constructor(private el: ElementRef, private render: Renderer2) {}
  
    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'level-left');
      if (this.role) {
        this.render.setAttribute(this.el.nativeElement, 'role', this.role);
      }
    }
  }

  @Component({
    selector: 'bulma-level-right',
    template: `<ng-content></ng-content>`,
    styleUrls: []
  })
  export class BulmaLevelRightComponent implements OnInit {
    @Input() role: string = '';
    constructor(private el: ElementRef, private render: Renderer2) {}
  
    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'level-right');
      if (this.role) {
        this.render.setAttribute(this.el.nativeElement, 'role', this.role);
      }
    }
  }

  @Component({
    selector: 'bulma-level-item',
    template: `<ng-content></ng-content>`,
    styleUrls: []
  })
  export class BulmaLevelItemComponent implements OnInit {
    @Input() role: string = '';
    constructor(private el: ElementRef, private render: Renderer2) {}
  
    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'level-item');
      if (this.role) {
        this.render.setAttribute(this.el.nativeElement, 'role', this.role);
      }
    }
  }