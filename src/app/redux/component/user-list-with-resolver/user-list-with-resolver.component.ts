import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs';
import {IState, IUserModuleState} from '../../+store/'
import { deleteUser,seedBooks,selectUser } from '../../+store/reducer/user/user.action';
import {booksCountSelector} from '../../+store/reducer/user/user.selector'
import { User } from '../../../interfaces/user-jsonFreeApi';
import { Book } from '../../../interfaces/book';
@Component({
  selector: 'app-user-list-with-resolver',
  templateUrl: './user-list-with-resolver.component.html',
  styleUrls: ['./user-list-with-resolver.component.css']
})
export class UserListWithResolverComponent implements OnInit {

  users$!: Observable<User[]>
  bookCount$!: Observable<number>
  constructor(private store: Store<{userModule: IUserModuleState}>) {
    //Expain: ToDo there is posibility to use selector considering hashing. I have to search in Internet
    this.users$=this.store.select(x=>{return x.userModule.user.userList})
    this.bookCount$=this.store.select(x=>booksCountSelector(x));
   }

   deleteHandler(userId:number) {
    this.store.dispatch(deleteUser({userId: userId}))
  }

  selectBookHandler(userId: number) {
    this.store.dispatch(selectUser({userId: userId}))
  }


  seedBookHandler(){
    let books: Book[] = [
      {id: 1 ,userId:1, name:"sssss"},
      {id: 2 ,userId:1, name:"dfdf"},
      {id: 3 ,userId:1, name:"sssdfdfss"},
      {id: 4 ,userId:2, name:"sssfsdsss"},
      {id: 5 ,userId:2, name:"sfs"},
      {id: 6 ,userId:3, name:"sdf"},
      {id: 7 ,userId:3, name:"sfsd"},
      {id: 8 ,userId:3, name:"ssfddssss"},
      {id: 9 ,userId:4, name:"sffd"},
  ];
    this.store.dispatch(seedBooks({bookList: books }));
  }

  ngOnInit(): void {
  }

}
