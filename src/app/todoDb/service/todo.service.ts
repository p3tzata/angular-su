import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodoTask } from 'src/app/interfaces/todoTask';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  loadExternal() {
    
    return this.httpClient.get<ITodoTask[]>("https://jsonplaceholder.typicode.com/todos");
    //getExternalTodos$.pipe(delay(5000));
   
  }

}
