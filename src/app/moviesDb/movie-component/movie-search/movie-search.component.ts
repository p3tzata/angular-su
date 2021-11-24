import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from '../../movies-model/movie';
import { MovieService } from '../../movies-services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  searchedMovie!: Movie[];
  constructor(private srv:MovieService,private actRouter: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    let queryString=this.actRouter.snapshot.params.queryString;
    this.srv.getSearchMovies(queryString).subscribe(el => this.searchedMovie=el)
  }



}
