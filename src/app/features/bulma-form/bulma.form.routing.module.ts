import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BulmaFormHomeComponent } from './components';

const routes: Routes = [
    { path: '', component: BulmaFormHomeComponent },
    { path: 'home', component: BulmaFormHomeComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BulmaFormRoutingModule {}