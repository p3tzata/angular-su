import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {map} from 'rxjs/operators'
import {IState,} from '../model/store/state.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private state:IState={
    userList: []
  }

  private store : BehaviorSubject<IState> = new BehaviorSubject(this.state);

  constructor() { }

  select<T>(selector: (state: IState) => T ) {
    //debugger;
    return this.store.pipe(map(selector))
  }
  
  update(updateFn: (state:IState) =>Partial<IState>  ){
    this.state=Object.assign({},this.state,updateFn(this.state));
    this.store.next(this.state);
  }

}
