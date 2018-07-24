import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components';
import { BulmaModule } from './bulma';
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
    BulmaModule,
    BulmaComponentsModule,
    BulmaFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
