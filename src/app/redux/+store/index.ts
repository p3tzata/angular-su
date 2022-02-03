//Explain: in real scenario, this is root store logic. +store have to be in app folder.
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import {ICoutnerState, reducerCounterFn} from './counter/counter.reducer'
import { IUserState, reducerUserFn } from './user/user.reducer';

export interface IState {
    readonly  counter69: ICoutnerState
    readonly  router: RouterReducerState<any>;
   // user: IUserState
}

export interface IUserModuleState {
    //counter69: ICoutnerState
  readonly  user: IUserState
}

export const reducersForRoot:ActionReducerMap<IState> = {
    counter69: reducerCounterFn,
    router: routerReducer
    //user: reducerUserFn
}

export const reducersForUserFeature:ActionReducerMap<IUserModuleState> = {
    //counter69: reducerCounterFn,
    user: reducerUserFn
}


const exampleOfReducer = [2,3,4,5]
.reduce( (acc,curentVal) => {return acc+curentVal} ,0);

const exampleOfReduxReducer = [{type: 'ACTION-ADD',payload: 1},{type: 'ACTION-SUB',payload: 1} ]
.reduce( (state, action) => {if (action.type=='ACTION-ADD') {return {...state, val1:state.val1+action.payload}} else {return {...state}} }    , {val1:1,val2:10})