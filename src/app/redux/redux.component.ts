import { Component, OnDestroy, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnInit,OnDestroy {
  counter!:number;
  subscription:Subscription;
  constructor(private store:Store<any>) {
    
     this.subscription = this.store.select( state => state.app.couter).subscribe((x)=>this.counter=x);

   }
  

  ngOnInit(): void {
    this.subscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
