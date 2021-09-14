import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, Subscriber } from 'rxjs'; 
import { concatMap, count, map, pairwise, reduce, take, scan} from 'rxjs/operators'

@Component({
  selector: 'app-main-service',
  templateUrl: './main-service.component.html',
  styleUrls: ['./main-service.component.css']
})
export class MainServiceComponent implements OnInit {

  constructor() { 

    console.log("learning RxJS");
    /* Old vision
    const stream$= new Observable((subscriber: Subscriber<any> ) => {
      let counter=1;
      
     const id = setInterval ( ()=> {
        //debugger;
        subscriber.next(counter++)
      },1000);
      //subscriber.error("ss");
      //subscriber.complete;
      
      return () => {
        console.log("Clear interval!")
        clearInterval(id);
      }
    
    });
    */
    const stream$=interval(100);
    stream$.pipe(
      take(5),
      //pairwise(),
      map(x => x*10 ),
      //scan((acc,value) => {return acc+=value},0 )
      reduce((acc,value) => {return acc+=value},0 )
    )
    .subscribe({
      next: (value) => {console.log(value)},
      error: (err) => {console.log(err)},
      complete: () => {console.log("stream ended!")}
    });



  }

  ngOnInit(): void {
  }

}


