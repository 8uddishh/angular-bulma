import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'components', loadChildren: './features/bulma-components/bulma.components.module#BulmaComponentsModule'},
    { path: 'form', loadChildren: './features/bulma-form/bulma.form.module#BulmaFormModule'}
    // { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
      imports: [(RouterModule.forRoot(routes, { enableTracing: false}))],
      exports: [RouterModule]
  })
  export class AppRoutingModule {}