import { Injectable } from '@angular/core';
import { ITodoTask } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  listOfTodo!: ITodoTask[];
  constructor() { 
    this.listOfTodo = [];
  }


  addTask(task: string){
    console.log(task);
    this.listOfTodo= this.listOfTodo.concat({task: task, completed: false });
  }

  toggleComplition(indx: number, data:string){
    console.log(data);
    const currentTodo = this.listOfTodo[indx];
    this.listOfTodo[indx]={...currentTodo, completed: !currentTodo.completed};
  }


}


