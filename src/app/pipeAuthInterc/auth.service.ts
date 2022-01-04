import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  singUp(username: string, password: string) {
    return this.httpClient
    .post<{message: string, userId: number}>('authFake/singUp',{username: username, password: password});
  }

  singIn(username: string, password: string){
    return this.httpClient
    .post<{message: string, userId: number, token: string}>('authFake/singIn',{username: username, password: password});
  }


}
