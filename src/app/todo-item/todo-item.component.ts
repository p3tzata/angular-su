import { Component, OnInit, Input } from '@angular/core';
import {ITodoTask} from '../interfaces';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todoItem!: ITodoTask;

  constructor() { }

  ngOnInit(): void {
  }

  toggleComplition(indx: number) {

  }

}
