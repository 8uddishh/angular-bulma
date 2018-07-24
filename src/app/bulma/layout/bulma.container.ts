import { Component, Input } from "@angular/core";

@Component({
    selector: 'bulma-container',
    template: `<div class="container" [attr.role]="role">
        <ng-content></ng-content>
    </div>`
})
export class BulmaContainerComponent {
    @Input() role: string = '';
}