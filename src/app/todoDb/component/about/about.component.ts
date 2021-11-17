import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {from, timer, of} from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router:Router) {
   
    let emit$=of([1,2,3,4,5]).pipe(delay(2000));
    emit$.subscribe( x=> {console.log("emit from aboutComponent"); 
    this.router.navigate(['todo-list','yyy'],{queryParams: { testParam : 'testVal'},fragment:'teeest'});} 
    );

   }

  ngOnInit(): void {
  }

}
