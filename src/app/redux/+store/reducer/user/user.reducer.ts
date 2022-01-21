
import { createReducer, on, createAction, Action } from '@ngrx/store';
import { User } from '../../../../interfaces/user-jsonFreeApi';
import {Book} from '../../../../interfaces/book'
import {addUsers, deleteUser,selectUser,addBooks} from '../user/user.action'

export const initialStateOjb:IUserState={userList: [],selectedUser: 0,booksList:[] }
export interface IUserState {
    userList: User[],
    selectedUser: number,
    booksList: Book[] 
    
}

const _counterReducer=createReducer<IUserState,Action>(
    initialStateOjb,
    on(selectUser,(state,props) => {return  Object.assign({},state,{selectUser: props.userId}  )}),
    on(addUsers,(state,props) => {return  Object.assign({},state,{userList: props.userList}  )}),

    on(deleteUser,(state,props) => {return  Object.assign({},state,{userList: state.userList.filter(x=>x.id!=props.userId) }  )}),
    on(addBooks,(state,props) => {return  Object.assign({},state,{userList: props.userList}  )}),
    ) ;

export function reducerUserFn (state:any, action: Action) {
    //debugger;
    return _counterReducer(state,action);

}