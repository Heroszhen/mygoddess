import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignComponent } from './mycomponents/sign/sign.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { GalleryComponent } from './mycomponents/gallery/gallery.component';

const routes: Routes = [
	{path:'',component : HomeComponent },
	{path:'sign',component : SignComponent },
	{path:'home',component : HomeComponent },
	{path:'gallery',component : GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
