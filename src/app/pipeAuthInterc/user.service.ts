import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]= [
    {userId: 1,
    userName: "pepi"},
    {userId:2,
      userName: "gogo"},
    {userId:3,
      userName: "ico"}
  ];


  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    return of(this.users).pipe(delay(1000));
  }


  getDashBoard(){
   return this.httpClient.get<{message: string}>("dashboard")
  }

}
