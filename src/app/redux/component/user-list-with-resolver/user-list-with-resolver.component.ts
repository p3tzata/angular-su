import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import {  from, merge, Observable, of } from 'rxjs';
import {IState, IUserModuleState} from '../../+store/'
import { clearAppState, clearState, deleteUser,seedBooks,seedPosts,seedPostsFail,seedPostsSuccess,selectUser, testEffect } from '../../+store/reducer/user/user.action';
import {booksCountSelector, booksOfUserSelector,booksUndefindedSelector} from '../../+store/reducer/user/user.selector'
import { User } from '../../../interfaces/user-jsonFreeApi';
import { Book } from '../../../interfaces/book';
import { Post } from '../../../interfaces/post-jsonFreeApi';
import { merge as mergeStatic } from 'rxjs/internal/observable/merge';
import { Actions, ofType } from '@ngrx/effects';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-user-list-with-resolver',
  templateUrl: './user-list-with-resolver.component.html',
  styleUrls: ['./user-list-with-resolver.component.css']
})
export class UserListWithResolverComponent implements OnInit {

  users$!: Observable<User[]>
  bookCount$!: Observable<number>
  posts$!: Observable<Post[]>
  booksUndefinded$!: Observable<Book[]>
  isLoadingPosts$!:Observable<boolean>;

  constructor(private store: Store<{userModule: IUserModuleState}>, private action$:Actions) {
  
    //Expain: ToDo there is posibility to use selector considering hashing. I have to search in Internet
    this.users$=this.store.select(x=>{return x.userModule.user.userList})
    this.bookCount$=this.store.select(x=>booksCountSelector(x));
    //this.bookCount$=this.store.select(booksCountSelector);
    this.posts$=this.store.select(x=>{return x.userModule.user.postsList});
    this.booksUndefinded$=this.store.pipe(booksUndefindedSelector);
    this.isLoadingPosts$=mergeStatic(
      this.action$.pipe(ofType(seedPosts),mapTo(true)),
      this.action$.pipe(ofType(seedPostsSuccess),mapTo(false)),
      this.action$.pipe(ofType(seedPostsFail),mapTo(false)),
      of(false) //Defaul emitted value
    )

   }

   deleteHandler(userId:number) {
    this.store.dispatch(deleteUser({userId: userId}))
  }

  selectBookHandler(userId: number) {
    this.store.dispatch(selectUser({userId: userId}))
  }


  seedBookHandler(){
    let books: (Book)[] = [
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

  testEffect(){
    this.store.dispatch(testEffect());
  }

  seedPostEffect(){
    this.store.dispatch(seedPosts());
  }

  clearState(){
    this.store.dispatch(clearState())
  }

  clearAppState(){
    this.store.dispatch(clearAppState())
  }

  ngOnInit(): void {
  }

}
