import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Post } from '../interfaces/post'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    {postId:1,
    userId:1,
    comment_:"test"},
    {postId:2,
    userId:1,
   comment_:"ssss"},
   {postId:3,
    userId:2,
   comment_:"ssss"},
   {postId:4,
    userId:1,
   comment_:"ssss"},

  ]
  constructor() { }

  getPost(): Observable<Post[]> {
    return of(this.posts).pipe(delay(5000));
  }
  

}
