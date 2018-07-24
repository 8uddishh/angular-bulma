import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BulmaContainerComponent, BulmaContainerFluidDirective, BulmaContainerFullHdDirective, BulmaContainerWideScreedDirective } from './layout';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [ BulmaContainerComponent, BulmaContainerFluidDirective, BulmaContainerFullHdDirective, BulmaContainerWideScreedDirective ],
    exports: [ BulmaContainerComponent, BulmaContainerFluidDirective, BulmaContainerFullHdDirective, BulmaContainerWideScreedDirective ]
})
export class BulmaModule { }