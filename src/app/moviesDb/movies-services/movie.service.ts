import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import MovieRes from '../movies-model/movieRes'


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private base_url='http://127.0.0.1:3000/moviesDb';
  private fake_api_key="fake_api_key=123456";
  constructor(private httClient: HttpClient) { }

  public getPopularMovies():Observable<MovieRes>{
   return this.httClient.get<MovieRes>(this.base_url+"/popular"+"?"+this.fake_api_key);
  }

}
