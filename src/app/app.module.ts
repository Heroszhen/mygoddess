import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MyserviceService } from './myservice/myservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './mycomponents/sign/sign.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { NavComponent } from './mycomponents/nav/nav.component';
import { GalleryComponent } from './mycomponents/gallery/gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    HomeComponent,
    NavComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
