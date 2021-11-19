import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import Movie from '../movies-model/movie';
import MovieDetailRes from '../movies-model/movieDetailRes';
import MovieDetail from '../movies-model/movieDetail';
import MovieRes from '../movies-model/movieRes'
import movieDetailProjection from '../movies-model/movieDetailProjection';
import MovieDetailProjection from '../movies-model/movieDetailProjection';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private base_url='http://127.0.0.1:3000/moviesDb';
  private fake_api_key="fake_api_key=123456";
  constructor(private httClient: HttpClient) { }

  public getPopularMovies():Observable<Movie[]>{
   let movies$ = this.httClient.get<MovieRes>(this.base_url+"/popular"+"?"+this.fake_api_key);
   return movies$.pipe(map((data)=>data.result));

  }

  public getPopularKidsMovies():Observable<Movie[]>{
    let movies$ = this.httClient.get<MovieRes>(this.base_url+"/popularKids"+"?"+this.fake_api_key);
    return movies$.pipe(map(x=>x.result));
   }

   public getMovieById(id:number):Observable<MovieDetailProjection>{
     let url=this.base_url+`/movie/${id}`+"?"+this.fake_api_key;
     
    let movies$ = this.httClient.get<MovieDetailRes>(url);
    return movies$.pipe(map(x=>x.result)).
    pipe(map(oldX=>{let x:MovieDetailProjection={...oldX,genres:oldX.genres.map(el=>el["name"]).join(', ')};  ;return x}));
   }


}
