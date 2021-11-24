import { Injectable } from '@angular/core';
import {forkJoin} from 'rxjs'
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
export class MovieDetailResolver implements Resolve<any> {

  constructor(private srv: MovieService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
   
   
    
    return forkJoin( {first: this.srv.getMovieById(route.params.id),
                      second: this.srv.getMovieById(route.params.id)});
  }
}


