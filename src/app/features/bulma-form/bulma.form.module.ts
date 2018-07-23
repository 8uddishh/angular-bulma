import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BulmaFormRoutingModule } from './bulma.form.routing.module';
import { BulmaFormHomeComponent } from './components'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BulmaFormRoutingModule
    ],
    declarations: [
        BulmaFormHomeComponent
    ],
    exports: [
        BulmaFormHomeComponent
    ]
})
export class BulmaFormModule { }