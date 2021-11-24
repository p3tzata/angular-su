import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Movie from '../../movies-model/movie';
import { MovieService } from '../../movies-services/movie.service';

@Component({
  selector: 'app-movies-db-page-landing',
  templateUrl: './movies-db-page-landing.component.html',
  styleUrls: ['./movies-db-page-landing.component.css']
})
export class MoviesDbPageLandingComponent implements OnInit {
  @ViewChild("f")
  searchForm!: NgForm;
  

  searchVal:string;
  constructor(private srv:MovieService, private router:Router) { 
    this.searchVal="";
  }
  
  ngOnInit(): void {
  }

  searchSubmit() {
    let queryString=this.searchForm.value.searchValue;
    this.router.navigate(["/movieDb/search",queryString]);
  }

  

}
