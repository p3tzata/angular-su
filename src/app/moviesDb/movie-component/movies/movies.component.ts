import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Movie from '../../movies-model/movie';
import { MovieService } from '../../movies-services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit,OnDestroy {
  popularMovie: Array<Movie> = [];
  popularKidsMovie: Array<Movie> =[];
  popularMovie$!: Subscription;
  popularKidsMovie$!: Subscription;
  showText ="N/A";
  constructor(private moviesService: MovieService) { 

  }
  

  ngOnInit(): void {
    this.popularMovie$=this.moviesService.getPopularMovies().subscribe(data => {
       
     //  console.log(data);
         this.popularMovie=data;
        // this.popularMovie=data['result'];
       
       // console.log("Popular movies:"+dataa);
       // this.popularMovie.forEach(x=>console.log(x));
       
      });

      this.popularKidsMovie$=this.moviesService.getPopularKidsMovies().subscribe(data => {
        this.popularKidsMovie=data;
       // console.log("Popular movies:"+dataa);
       // this.popularMovie.forEach(x=>console.log(x));
       
      });


      
  }

 

  childButtonClicked(event: Movie): void {
  //  console.log(event.);
    this.showText="Movie: "+event.title+" is with release date: "+event.release_date;

  }


  ngOnDestroy(): void {
    //agains memory leaks.
    this.popularMovie$.unsubscribe();
    this.popularKidsMovie$.unsubscribe();
  }


}
