import { OnInit, Renderer2, ElementRef } from "../../../node_modules/@angular/core";

export class BulmaBaseClassDirective implements OnInit {
    className: string;

    constructor(protected render: Renderer2, protected el: ElementRef) { }

    ngOnInit(): void {
        this.render.addClass(this.el.nativeElement, this.className);
    }
}