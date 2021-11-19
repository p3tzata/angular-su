import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-db-nav-bar',
  templateUrl: './movies-db-nav-bar.component.html',
  styleUrls: ['./movies-db-nav-bar.component.css']
})
export class MoviesDbNavBarComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element) element.scrollIntoView()
    })
  }

}
