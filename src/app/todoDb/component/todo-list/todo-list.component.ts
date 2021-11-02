import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodoTask } from 'src/app/interfaces';
import { TodoService } from '../../service/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoTask! : ITodoTask[];
  public enableLeave: boolean=false;
  constructor(private activatedRoute:ActivatedRoute, ) {
   // debugger;
  this.todoTask= this.activatedRoute.snapshot.data[0];

   }

  ngOnInit(): void {
  
  }

}
