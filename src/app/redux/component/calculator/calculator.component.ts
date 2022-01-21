import { Component, OnDestroy, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { Observable, Subscription } from 'rxjs';
import { IState } from '../../+store';

import {incrementCounter,decrementCounter,resetCounter} from '../../+store/reducer/counter/counter.action'
import { ICoutnerState } from '../../+store/reducer/counter/counter.reducer';
@Component({
  selector: 'app-calcolator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  //counter$!:Observable<number>;
  counter!:number
  lastTimeOfReset!:number | undefined
  timesOfReset!:number
  subscribtion: Subscription;
  counter$!:Observable<ICoutnerState>
  constructor(private store:Store<IState>) {
    
    this.subscribtion=this.store.select(state=>state.counter69).subscribe(
      (x)=>{this.counter=x.count,
        this.lastTimeOfReset=x.lastTimeOfReset,
        this.timesOfReset=x.timesOfReset
      });

     this.counter$=this.store.select('counter69');

   }
 
  
  ngOnInit(): void {
  
  }

  increment() {
    this.store.dispatch(incrementCounter());
  }
  
  decrement() {
    this.store.dispatch(decrementCounter());
  }

  reset() {
    this.store.dispatch(resetCounter({timestamp: Date.now()}));
  }


  ngOnDestroy(): void {
   this.subscribtion.unsubscribe();
  }

}
