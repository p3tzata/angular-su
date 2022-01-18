import { Injectable } from '@angular/core';
import {IPost} from '../shared/post.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly CREATE_POST_URL = 'wsh-postComentStrc/post/create';

  constructor(private http: HttpClient) { }
  createPost(body: IPost) {
    return this.http.post(this.CREATE_POST_URL, body);
  }

}
