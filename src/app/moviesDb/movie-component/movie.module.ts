import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesDbNavBarComponent } from './movies-db-nav-bar/movies-db-nav-bar.component';
import { MoviesDbPageLandingComponent } from './movies-db-page-landing/movies-db-page-landing.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { MainMoviesDbComponent } from './main-movies-db/main-movies-db.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    MainMoviesDbComponent,
    MoviesDbNavBarComponent,
    FooterComponent,
    MoviesDbPageLandingComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailComponent,
    MovieSearchComponent,],
  imports: [
    CommonModule
    ,FormsModule
    ,AppRoutingModule
  ],
  exports: [MainMoviesDbComponent]
})
export class MovieModule { }
