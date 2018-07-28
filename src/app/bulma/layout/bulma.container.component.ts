import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'bulma-container, [container]',
  template: `<ng-content></ng-content>`,
  styles: [`:host {
    display: block;
  }`]
})
export class BulmaContainerComponent implements OnInit {
  @Input() role: string = '';
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'container');
    if (this.role) {
      this.render.setAttribute(this.el.nativeElement, 'role', this.role);
    }
  }
}
