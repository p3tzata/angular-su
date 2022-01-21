import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs';
import {IState, IUserModuleState} from '../../+store/'
import { deleteUser } from '../../+store/reducer/user/user.action';
import { IUserState } from '../../+store/reducer/user/user.reducer';
import { User } from '../../../interfaces/user-jsonFreeApi';
@Component({
  selector: 'app-user-list-with-resolver',
  templateUrl: './user-list-with-resolver.component.html',
  styleUrls: ['./user-list-with-resolver.component.css']
})
export class UserListWithResolverComponent implements OnInit {

  users$!: Observable<User[]>
  constructor(private store: Store<{userModule: IUserModuleState}>) {
    //Expain: ToDo there is posibility to use selector considering hashing. I have to search in Internet
    this.users$=this.store.select(x=>{return x.userModule.user.userList})

   }

   deleteHandler(userId:number) {
    this.store.dispatch(deleteUser({userId: userId}))
  }

  selectBookHandler(userId: number) {

  }

  ngOnInit(): void {
  }

}
