import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { DetailsmovieComponent } from './detailsmovie/detailsmovie.component';
import { TvshowdetailsComponent } from './tvshowdetails/tvshowdetails.component';


const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'tvshows',
    component: TvshowsComponent
  },
  {
    path: 'movie/details/:id',
    component: DetailsmovieComponent
  },
  {
    path: 'tvshow/details/:id',
    component: TvshowdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
