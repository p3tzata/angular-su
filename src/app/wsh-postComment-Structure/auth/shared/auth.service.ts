import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SignInResponse} from '../../core/model/singInResponse.model'
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl = 'wsh-postComentStrc/auth/login';
  private readonly registerUrl = 'wsh-postComentStrc/auth/register';

  constructor(private http : HttpClient,private router:Router) { }

  logout() {
    localStorage.clear();
    this.router.navigate(['/postComentStructure/auth', { outlets: { postCommentRouterOutlet: [ 'login' ] }}]);
       
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  login(body:string) {
    return this.http.post<SignInResponse>(this.loginUrl, body);
  }

  register(body: string) {
    return this.http.post(this.registerUrl, body);
  }

  

  getToken(){
   return localStorage.getItem("token");
  }

  setToken(token: string) {
    localStorage.setItem("token",token);
  }

  setUsername(username: string) {
    localStorage.setItem("username",username)
  }

  setUserId(userId: string) {
    localStorage.setItem("userId",userId)
  }

  getUserId():string{
    return localStorage.getItem("userId") || '';
   }

}
