import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../interface/task';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-task-all',
  templateUrl: './task-all.component.html',
  styleUrls: ['./task-all.component.css']
})
export class TaskAllComponent implements OnInit {
  allTasks$!: Observable<Task[]>;
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.allTasks$=this.taskService.getAllTask();
  }

}
