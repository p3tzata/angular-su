
import { createFeatureSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

import { createSelector } from "@ngrx/store";
import { IUserModuleState } from "../";
import { Book } from "../../../interfaces/book";
import { User } from "../../../interfaces/user-jsonFreeApi";
import { IUserState } from "./user.reducer";

const userModuleSelector=createFeatureSelector<IUserState>('userModule');
const moduleState1 =  (userModuleSelector:IUserState) => { return userModuleSelector };

 const moduleState =  (state: {userModule: IUserModuleState}) => { return state.userModule.user};
 
 const selectUser = (state: {userModule: IUserModuleState})  => state.userModule.user.selectedUser;
 const books = (state: {userModule: IUserModuleState})  => state.userModule.user.booksList;
 

export const booksCountSelector = createSelector(
  //  userModuleSelector,
  //  state => state.booksList.length
     moduleState,
    (state: IUserState) => state.booksList.length

);

export const userTokenSelector = createSelector(
  //  userModuleSelector,
  //  state => state.booksList.length
     moduleState,
    (state: IUserState) => state.userToken

);



export const booksUndefindedSelector = pipe (
  select(books),
  filter(x=>x!==undefined)
)



export const booksOfUserSelector = createSelector(
  selectUser,
  books,
    (selectedUserId: number, booksList1: Book[]) => {
      if (selectedUserId && booksList1) {
        return booksList1.filter( x=>x?.userId===selectedUserId )
      } else {
        return undefined;
      }
      
      
    }
);
/**/

/*
export interface User {
    id: number;
    name: string;
  }
   
  export interface Book {
    id: number;
    userId: number;
    name: string;
  }
   
  export interface AppState {
    selectedUser: User;
    allBooks: Book[];
  }

export const selectUser = (state: AppState) => state.selectedUser;
export const selectAllBooks = (state: AppState) => state.allBooks;
 
export const selectVisibleBooks = createSelector(
  selectUser,
  selectAllBooks,
  (selectedUser: User, allBooks: Book[]) => {
    if (selectedUser && allBooks) {
      return allBooks.filter((book: Book) => book.userId === selectedUser.id);
    } else {
      return allBooks;
    }
  }
);

*/