import { Component, OnInit } from '@angular/core';
import Movie from '../../movies-model/movie';
import { MovieService } from '../../movies-services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovie: Array<Movie> = [];
  showText ="N/A";
  constructor(private moviesService: MovieService) { 

  }

  ngOnInit(): void {
      this.moviesService.getPopularMovies().subscribe(data => {
        this.popularMovie=data['result'];
       // console.log("Popular movies:"+dataa);
       // this.popularMovie.forEach(x=>console.log(x));
       
      });
      
  }

  childButtonClicked(event: Movie): void {
  //  console.log(event.);
    this.showText="Movie: "+event.title+" is with release date: "+event.release_date;

  }


}
