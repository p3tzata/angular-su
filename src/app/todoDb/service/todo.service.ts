import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ITodoTask } from 'src/app/interfaces/todoTask';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  loadExternal<T>(id?:number):Observable<T> {

    if(id) {
      return this.httpClient.get<T>(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(delay(1000));
      //getExternalTodos$.pipe(delay(5000));
    } else {
      return this.httpClient.get<T>("https://jsonplaceholder.typicode.com/todos");
    //getExternalTodos$.pipe(delay(5000));
    }


   // 

    
   
  }

}
