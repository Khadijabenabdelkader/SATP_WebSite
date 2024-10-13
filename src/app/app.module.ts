import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app.routes';
import {  HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    GoogleMapsModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [], 
})
export class AppModule { }
