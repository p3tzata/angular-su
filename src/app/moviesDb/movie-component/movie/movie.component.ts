import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from '../../movies-model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: Movie={} as Movie;

  @Output()
  clickButtonEventEmitter: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() {
    
   }

  ngOnInit(): void {
    //console.log("ok from :"+ this.movie);
  }

  clickButton():void {
     // console.log("movide id: "+ this.movie.id);
      this.clickButtonEventEmitter.emit(this.movie);
  }


}
