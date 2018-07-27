import { Component, Input } from "@angular/core";

@Component({
    selector: 'bulma-columns',
    template: `<div class="columns" [attr.role]="role">
        <ng-content></ng-content>
    </div>`
})
export class BulmaColumnsComponent {
    @Input() role: string = '';
}

@Component({
    selector: 'bulma-column',
    template: `<div class="column" [attr.role]="role">
        <ng-content></ng-content>
    </div>`
})
export class BulmaColumnComponent {
    @Input() role: string = '';
}