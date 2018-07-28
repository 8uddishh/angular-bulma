import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'bulma-container',
  template: `<ng-content></ng-content>`,
  styleUrls: ['bulma.container.component.css']
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
