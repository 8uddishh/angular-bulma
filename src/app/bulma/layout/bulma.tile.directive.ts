import { OnInit, Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: 'bulma-tile[ancestor], [tile][ancestor]'
  })
  export class BulmaTileAncestorDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}
  
    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-ancestor');
    }
  }

  @Directive({
    selector: 'bulma-tile[parent], [tile][parent]'
  })
  export class BulmaTileParentDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}
  
    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-parent');
    }
  }

  @Directive({
    selector: 'bulma-tile[child], [tile][child]'
  })
  export class BulmaTileChildDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}
  
    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-child');
    }
  }

  @Directive({
    selector: 'bulma-tile[vertical], [tile][vertical]'
  })
  export class BulmaTileVerticalDirective implements OnInit {
    constructor(private el: ElementRef, private render: Renderer2) {}
  
    ngOnInit(): void {
      this.render.addClass(this.el.nativeElement, 'is-vertical');
    }
  }