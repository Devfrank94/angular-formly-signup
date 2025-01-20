import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';


// Formly
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Pages
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { Error404Component } from './pages/error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    // HttpClient,
    Error404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    // HttpClient,
    SharedModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  // constructor(private httpClient: HttpClient) { }

}
