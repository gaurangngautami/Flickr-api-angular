import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlickrSearchComponent } from './flickr-search/flickr-search.component';
const routes: Routes = [
  {path:'' ,component: FlickrSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
