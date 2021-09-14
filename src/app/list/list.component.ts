
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map,debounceTime,delay, mergeScan,scan, tap,share, take } from 'rxjs/operators';
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

  @ViewChild('taskFilterInput')
  taskFilterInputEl!: ElementRef;


  @ViewChild('taskInput')
  taskInputEl!: ElementRef;

  listOfTodo!: ITodoTask[]; 

  constructor(private todoService: TodoService) {
    this.nameVal="test value";
   
    //debugger;
    todoService.loadExternal();
    


    
    

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
    //create break point. In console of chrome I can type "this" and this will print the corrent component.
    //debugger;
   
     console.log("ngAfterViewInit->" + this.taskInputEl.nativeElement.value);
     this.taskInputEl.nativeElement.value="Test afterViewInit()";


     const stream$ = fromEvent<KeyboardEvent>(this.taskFilterInputEl.nativeElement,"keyup")
     .pipe( debounceTime(200) )
     .pipe( map( e => this.taskFilterInputEl.nativeElement.value ) )
     .pipe( tap({
                next: x => {console.log("TAP: " + x); },
                error: err => { console.error("TAP: " + err); },
                }))//Used to spay streem.
      .pipe( share() )// Determine cold or hot observer.
      ;
     
     // With share() - hot observers, without share() cold observers.
     stream$.subscribe( (e) => {console.log("Stream 1:" + e)} );
     stream$.subscribe( (e) => {console.log("Stream 2:" + e)} ); //The second is bad. on cold
    


  } 

  // This check is called by decision of angular
  ngDoCheck(){
    //debugger;
    this.listOfTodo=this.todoService.listOfTodo;
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
