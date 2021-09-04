import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  nameVal: string;
  listOfTodo: any[];
  imgURL="https://images.freeimages.com/images/large-previews/7e9/ladybird-1367182.jpg"

  @ViewChild('taskInput')
  taskInputEl!: ElementRef;

  constructor() {
    this.nameVal="test value";
    this.listOfTodo = [];
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
    console.log(task);
    this.listOfTodo= this.listOfTodo.concat({task: task, completed: false });
  }

  toggleComplition(indx: number, data:string){
    console.log(data);
    const currentTodo = this.listOfTodo[indx];
    this.listOfTodo[indx]={...currentTodo, completed: !currentTodo.completed};
  }

}
