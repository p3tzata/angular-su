import { Component, OnInit } from '@angular/core';
import Movie from '../movies-model/movie';
import { MovieService } from '../movies-services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovie: Array<Movie> = [];
  singleMove: Movie;
  constructor(private moviesService: MovieService) { 
  this.singleMove={} as Movie;

  }

  ngOnInit(): void {
      this.moviesService.getPopularMovies().subscribe(dataa => {
        this.popularMovie=dataa['result'];
       // console.log("Popular movies:"+dataa);
       // this.popularMovie.forEach(x=>console.log(x));
        this.singleMove=this.popularMovie[0];
      });
      
  }

}
