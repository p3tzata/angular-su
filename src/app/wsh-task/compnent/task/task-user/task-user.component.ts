import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../interface/task';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-task-user',
  templateUrl: './task-user.component.html',
  styleUrls: ['./task-user.component.css']
})
export class TaskUserComponent implements OnInit {

  allTasks$!: Observable<Task[]>;
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.allTasks$=this.taskService.getAllTaskByUser();
  }
  
  deleteTask(_id:string) {
    this.taskService.deleteTask(_id).subscribe( x=> 
      //This is bad 
      this.allTasks$=this.taskService.getAllTaskByUser()
    );
    
  }

}
