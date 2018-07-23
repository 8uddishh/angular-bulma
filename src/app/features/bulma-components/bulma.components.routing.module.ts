import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BulmaComponentsHomeComponent } from './components';

const routes: Routes = [
    { path: '', component: BulmaComponentsHomeComponent },
    { path: 'home', component: BulmaComponentsHomeComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BulmaComponentsRoutingModule {}