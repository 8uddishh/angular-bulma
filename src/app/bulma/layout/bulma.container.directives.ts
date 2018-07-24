import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({
    selector: 'bulma-container[fluid]',
})
export class BulmaContainerFluidDirective implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        this.el.nativeElement.childNodes[0].classList.add('is-fluid');
    }
}

@Directive({
    selector: 'bulma-container[fullhd]',
})
export class BulmaContainerFullHdDirective implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        this.el.nativeElement.childNodes[0].classList.add('is-fullhd');
    }
}

@Directive({
    selector: 'bulma-container[widescreen]',
})
export class BulmaContainerWideScreedDirective implements OnInit  {
    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        this.el.nativeElement.childNodes[0].classList.add('is-widescreen');
    }
}