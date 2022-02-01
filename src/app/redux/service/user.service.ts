import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../../interfaces/user-jsonFreeApi'
import { Observable } from 'rxjs';
import {Post} from '../../interfaces/post-jsonFreeApi'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { 
    

  }

  getAll():Observable<User[]>{

   return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
    
  }

  getAllPost():Observable<Post[]> {
    
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }


}
