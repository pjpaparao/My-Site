import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyTopicsComponent } from './my-topics/my-topics.component';
import { ResumeComponent } from './resume/resume.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [{
  path: 'home', component: HomeComponent, children: [
    { path: 'profile', component: MyProfileComponent },
    { path: 'tech', component: MyTopicsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'gall', component: GalleryComponent },
    { path: 'contact', component: ContactComponent }
  ]
}];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
