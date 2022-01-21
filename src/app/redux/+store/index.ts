//Explain: in real scenario, this is root store logic. +store have to be in app folder.
import { ActionReducerMap } from '@ngrx/store';
import {ICoutnerState, reducerCounterFn} from './reducer/counter/counter.reducer'
import { IUserState, reducerUserFn } from './reducer/user/user.reducer';

export interface IState {
    counter69: ICoutnerState
   // user: IUserState
}

export interface IUserModuleState {
    //counter69: ICoutnerState
    user: IUserState
}

export const reducersForRoot:ActionReducerMap<IState> = {
    counter69: reducerCounterFn,
    //user: reducerUserFn
}

export const reducersForUserFeature:ActionReducerMap<IUserModuleState> = {
    //counter69: reducerCounterFn,
    user: reducerUserFn
}


const exampleOfReducer = [2,3,4,5].reduce( (acc,curentVal) => {return acc+curentVal} ,0);