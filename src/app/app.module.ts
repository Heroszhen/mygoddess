import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MyserviceService } from './myservice/myservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent,SafePipe } from './app.component';
import { SignComponent } from './mycomponents/sign/sign.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { NavComponent } from './mycomponents/nav/nav.component';
import { GalleryComponent } from './mycomponents/gallery/gallery.component';
import { MovieComponent } from './mycomponents/movie/movie.component';
import { VideoComponent } from './mycomponents/video/video.component';



@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    SignComponent,
    HomeComponent,
    NavComponent,
    GalleryComponent,
    MovieComponent,
    VideoComponent
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
