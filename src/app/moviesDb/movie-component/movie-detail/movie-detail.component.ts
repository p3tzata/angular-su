import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import MovieDetail from '../../movies-model/movieDetail';
import MovieDetailProjection from '../../movies-model/movieDetailProjection';
import { MovieService } from '../../movies-services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieDetailProjection!: MovieDetailProjection;
  constructor(private activatedRoute:ActivatedRoute, private service:MovieService) { 
      this.movieDetailProjection=this.activatedRoute.snapshot.data['detailResolve'];
  }

  ngOnInit(): void {
   // let movieDetail$=this.service.getMovieById(1);
   // movieDetail$.pipe(tap(x=>console.log(x)));

  //  movieDetail$.subscribe(data => this.movieDetailProjection=data);
    
  }

}
