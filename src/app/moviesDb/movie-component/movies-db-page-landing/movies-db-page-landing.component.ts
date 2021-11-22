import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-db-page-landing',
  templateUrl: './movies-db-page-landing.component.html',
  styleUrls: ['./movies-db-page-landing.component.css']
})
export class MoviesDbPageLandingComponent implements OnInit {
  searchVal:string;
  constructor() { }
  
  ngOnInit(): void {
  }

  searchSubmit() {

  }

}
