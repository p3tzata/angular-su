import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../interface/task';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task!: Task;
  constructor(private taskService:TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id="0";
    this.route.params.subscribe(data => {
      id=data['id'];
      this.taskService.getTask(id).subscribe( (data)=> {this.task=data} );
    })

  }

}
