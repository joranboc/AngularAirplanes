import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlanesComponent } from './planes/planes.component';
import { PlaneDetailComponent } from './plane-detail/plane-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanesComponent,
    PlaneDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
