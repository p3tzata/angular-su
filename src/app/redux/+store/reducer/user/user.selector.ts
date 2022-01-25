
import { createSelector } from "@ngrx/store";
import { IUserModuleState } from "../..";
import { Book } from "../../../../interfaces/book";
import { User } from "../../../../interfaces/user-jsonFreeApi";
import { IUserState } from "./user.reducer";
 const user =  (state: {userModule: IUserModuleState}) => { return state.userModule.user};
 const books = (state: {userModule: IUserModuleState}) => state.userModule.user.booksList;




export const booksCountSelector = createSelector(
    books,
    (state: Book[]) => state.length
);


   



export const bookOfUserSelector = createSelector(
    user,
    books,
    (selectedUser: User, booksList: Book[]) => {
        return booksList;
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