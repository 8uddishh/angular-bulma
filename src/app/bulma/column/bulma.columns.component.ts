import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'bulma-columns',
  template: `<ng-content></ng-content>`
})
export class BulmaColumnsComponent implements OnInit {
  @Input() role: string = '';
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'columns');
    if (this.role) {
      this.render.setAttribute(this.el.nativeElement, 'role', this.role);
    }
  }
}

@Component({
  selector: 'bulma-column',
  template: `<ng-content></ng-content>`
})
export class BulmaColumnComponent implements OnInit {
  @Input() role: string = '';
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'column');
    if (this.role) {
      this.render.setAttribute(this.el.nativeElement, 'role', this.role);
    }
  }
}
