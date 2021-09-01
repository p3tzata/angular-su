import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  nameVal: string;
  listOfTodo: any[];
  constructor() {
    this.nameVal="test value";
    this.listOfTodo = [];
   }

  ngOnInit(): void {
  }

  onKeyUpHandler(value: string) {
    console.log(value);
  }

  addTask(task: string){
    console.log(task);
    this.listOfTodo= this.listOfTodo.concat({task: task, completed: false });
  }

  toggleComplition(indx: number){
    const currentTodo = this.listOfTodo[indx];
    this.listOfTodo[indx]={...currentTodo, completed: !currentTodo.completed};
  }

}
