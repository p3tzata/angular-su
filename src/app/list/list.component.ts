import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ITodoTask } from '../interfaces';
import { TodoService } from '../serviceLearning/todo.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  nameVal: string;
  
  imgURL="https://images.freeimages.com/images/large-previews/7e9/ladybird-1367182.jpg"

  @ViewChild('taskInput')
  taskInputEl!: ElementRef;

  constructor(private todoService: TodoService) {
   
    this.nameVal="test value";
    

    //Testing changeDetection
    /*
    setTimeout(
        ()=>{
          debugger;
        //This will work in both ChangeDetectionStrategy.{onPush,Default} (of TodoItemComponent)
        //const currentTodo = this.listOfTodo[0];
        //this.listOfTodo[0]={...currentTodo, completed: !currentTodo.completed};

         //This will not work if changeDetection in ChangeDetectionStrategy.onPush(of TodoItemComponent),
         // because there is no new reference.
          this.listOfTodo[0].completed=!this.listOfTodo[0].completed


        },5000
    );
        */

   }

   ngAfterViewInit(): void {
    //create breack point. In console of chrome I can type "this" and this will print the corrent component.
    //debugger;
   
     console.log("ngAfterViewInit->" + this.taskInputEl.nativeElement.value);
   this.taskInputEl.nativeElement.value="Test afterViewInit()";
  } 


  ngOnInit(): void {
  }

  onKeyUpHandler(value: string) {
    console.log(value);
  }

  addTask(task: string){
    this.todoService.addTask(task);
  }

  toggleComplition(indx: number, data:string){
    this.todoService.toggleComplition(indx,data);
  }

  todoGetAll(): ITodoTask[] {
    return this.todoService.listOfTodo;
  }

}
