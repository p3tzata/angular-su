
import { createReducer, on, createAction, Action } from '@ngrx/store';
import {incrementCounter,decrementCounter,resetCounter} from './counter.action'

export const initialStateOjb:ICoutnerState={count: 0, lastTimeOfReset:undefined,timesOfReset:0}
export interface ICoutnerState {
    count: number, 
    lastTimeOfReset: number | undefined ,
    timesOfReset:number
}

const _counterReducer=createReducer<ICoutnerState,Action>(
    initialStateOjb,
    on(incrementCounter,(state) => {return  Object.assign({},state, {count:state.count+1})}),
    on(decrementCounter,(state) => {return  {...state,count:state.count-1}} ),
    on(resetCounter,(state,props) => {return  Object.assign({},state,{count:0,lastTimeOfReset:props.timestamp, timesOfReset:state.timesOfReset+1})}) 
) ;

export function reducerCounterFn (state:any, action: Action) {
    //debugger;
    return _counterReducer(state,action);

}