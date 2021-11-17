import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodoTask } from '../interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  listOfTodo!: ITodoTask[];
  
  constructor(private httpClient: HttpClient) { 
    this.listOfTodo=[];
    this.listOfTodo[0]={id: 1,title: "test", completed: false };
  }


  loadExternal() {
    
    const getExternalTodos$=this.httpClient.get<any>("https://jsonplaceholder.typicode.com/todos");
    getExternalTodos$.pipe(delay(5000));
    getExternalTodos$.subscribe ( (el) => {this.listOfTodo=el; console.log(el); });
  }


  addTask(title: string){
    console.log(title);
    this.listOfTodo= this.listOfTodo.concat({id:1,title: title, completed: false });
  }

  toggleComplition(indx: number, data:string){
    console.log(data);
    const currentTodo = this.listOfTodo[indx];
    this.listOfTodo[indx]={...currentTodo, completed: !currentTodo.completed};
  }


}


