import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BulmaComponentsRoutingModule } from './bulma.components.routing.module';
import { BulmaComponentsHomeComponent } from './components'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BulmaComponentsRoutingModule
    ],
    declarations: [
        BulmaComponentsHomeComponent
    ],
    exports: [
        BulmaComponentsHomeComponent
    ]
})
export class BulmaComponentsModule { }