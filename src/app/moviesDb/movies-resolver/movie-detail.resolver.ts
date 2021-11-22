import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import MovieDetailProjection from '../movies-model/movieDetailProjection';
import { MovieService } from '../movies-services/movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolver implements Resolve<MovieDetailProjection> {

  constructor(private srv: MovieService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieDetailProjection> {
    return this.srv.getMovieById(route.params.id);
  }
}
