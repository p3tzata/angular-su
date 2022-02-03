
import { createReducer, on, createAction, Action } from '@ngrx/store';
import { User } from '../../../interfaces/user-jsonFreeApi';
import {Book} from '../../../interfaces/book'
import {addUsers, deleteUser,selectUser,seedBooks,addBookToUser, seedPostsSuccess, seedPostsFail, clearState, setToken} from '../user/user.action'
import { Post } from '../../../interfaces/post-jsonFreeApi';

export const initialStateOjb:IUserState={userList: [],selectedUser: 0,userToken:'111122223333',booksList:[],postsList:[],errorMsg:'' }
export interface IUserState {
    readonly userList: User[],
    readonly selectedUser: number,
    readonly userToken: string | null,
    readonly booksList: Book[],
    readonly postsList: Post[],
    readonly errorMsg: string
    
}

const _counterReducer=createReducer<IUserState,Action>(
    initialStateOjb,
    on(selectUser,(state,props) => {return  Object.assign({},state,{selectedUser: props.userId}  )}),
    on(addUsers,(state,props) => {return  Object.assign({},state,{userList: props.userList}  )}),
    on(deleteUser,(state,props) => {return  Object.assign({},state,{userList: state.userList.filter(x=>x.id!=props.userId) }  )}),
    on(seedBooks,(state,props) => {return  {...state,booksList: props.bookList}  }),
    on(addBookToUser, (state,props) => {return  Object.assign({},state,{booksList: state.booksList.concat(props.book) }  )}),
    on(seedPostsSuccess, (state,props) => {return {...state,postsList:props.postList}} ),
    on(seedPostsFail, (state,props) => {return {...state,errorMsg:props.errorMsg}} ),
    on(setToken, (state,props) => {return {...state,userToken:props.token}} ),
    on(clearState, ()=> initialStateOjb)
    ) ;

export function reducerUserFn (state:any, action: Action) {
    //debugger;
    return _counterReducer(state,action);

}