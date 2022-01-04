import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SignInResponse } from '../../interface/signInresponse'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl = 'wsh-task/auth/login';
  private readonly registerUrl = 'wsh-task/auth/register';

  constructor(
    private http : HttpClient
  ) {  }

  register(body: string) {
    return this.http.post(this.registerUrl, body);
  }

  login(body:string) {
    return this.http.post<SignInResponse>(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
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

}