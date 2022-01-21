import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { mapTo,tap} from 'rxjs/operators';
import { UserService } from '../service/user.service';
import {User} from '../../interfaces/user'
import { IState } from '../+store';
import { Store } from '@ngrx/store';
import { addUsers } from '../+store/reducer/user/user.action';

@Injectable(/**/{
  providedIn: 'root'
})
export class UserListResolver implements Resolve<boolean> {

  constructor(private userSrv: UserService,private store:Store<IState>) {
    //console.log(userSrv)
   // debugger;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    //Explain: todo here we have to use ngrx effects.
    return this.userSrv.getAll().pipe(
        tap( x=> this.store.dispatch(addUsers({userList: x}))),mapTo(true)
      );

  }

}
