import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: 'bulma-container[fluid]',
})
export class BulmaContainerFluidDirective {
    constructor(private el: ElementRef) {
        setTimeout(() => {
            this.el.nativeElement.childNodes[0].classList.add('is-fluid');
        });
    }
}

@Directive({
    selector: 'bulma-container[fullhd]',
})
export class BulmaContainerFullHdDirective {
    constructor(private el: ElementRef) {
        setTimeout(() => {
            this.el.nativeElement.childNodes[0].classList.add('is-fullhd');
        });
        
    }
}

@Directive({
    selector: 'bulma-container[widescreen]',
})
export class BulmaContainerWideScreedDirective {
    constructor(private el: ElementRef) {
        setTimeout(() => {
            this.el.nativeElement.childNodes[0].classList.add('is-widescreen');
        });
        
    }
}