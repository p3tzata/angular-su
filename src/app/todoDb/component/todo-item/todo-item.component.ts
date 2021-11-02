import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ITodoTask } from 'src/app/interfaces';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  /* Test changeDetection
  changeDetection:ChangeDetectionStrategy.OnPush
  */
})
export class TodoItemComponent implements OnInit {

  @Input()
  todoItem!: ITodoTask;
  
  @Input()
  todoIndemIndx!: number; 


  @Output()
  //toggleEvent: EventEmitter<void> = new EventEmitter();
  toggleEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnChange() {
    console.log("changed");
  }

  ngOnInit(): void {
   // console.log("init");
  }

  toggleComplition() {
    this.toggleEvent.emit('this is only if we want to send some data');
  }

}
