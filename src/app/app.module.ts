import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components';
import { BulmaComponentsModule } from './features/bulma-components';
import { BulmaFormModule } from './features/bulma-form';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BulmaComponentsModule,
    BulmaFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
