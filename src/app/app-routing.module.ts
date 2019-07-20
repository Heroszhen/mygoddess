import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignComponent } from './mycomponents/sign/sign.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { GalleryComponent } from './mycomponents/gallery/gallery.component';
import { MovieComponent } from './mycomponents/movie/movie.component';
import { VideoComponent } from './mycomponents/video/video.component';

import { AdmingalleryComponent } from './mycomponents/admin/admingallery/admingallery.component';
import { AdminuserComponent } from './mycomponents/admin/adminuser/adminuser.component';

const routes: Routes = [
	{path:'',component : HomeComponent },
	{path:'sign',component : SignComponent },
	{path:'home',component : HomeComponent },
	{path:'gallery',component : GalleryComponent },
	{path:'movie',component : MovieComponent },
	{path:'video',component : VideoComponent },
	{path:'admingallery/:id',component : AdmingalleryComponent },
	{path:'admingallery/1',component : AdmingalleryComponent },
	{path:'admingallery/2',component : AdmingalleryComponent },
	{path:'adminuser',component : AdminuserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
