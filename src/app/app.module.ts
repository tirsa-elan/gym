import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymSiteComponent } from './gym-site/gym-site.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GymSiteComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
