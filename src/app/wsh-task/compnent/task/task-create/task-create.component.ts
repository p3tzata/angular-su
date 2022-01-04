import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms'
import { TaskService } from '../../../service/task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private srv: TaskService, private router:Router) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      make: ['',[Validators.required, Validators.minLength(10)] ] , 
      model: ['',[Validators.required, Validators.minLength(2)] ] ,
      year: ['',[Validators.required, Validators.min(1950), Validators.max(2050)] ] ,
      description: ['',[Validators.required, Validators.minLength(10)] ] ,
      price: ['',[Validators.required, Validators.min(2)] ] ,
      image: ['',[Validators.required] ] ,
      material: ['',[Validators.nullValidator]]
    });
  }

  submitHandler(isNeedRedirect:boolean){
    console.log(isNeedRedirect)
    
    if (!isNeedRedirect) {
    this.srv.createTask(this.form.value)
    .subscribe( x=> console.log(x),err => console.log(err))
    } else {
      this.srv.createTask(this.form.value)
      .subscribe( x=>{ 
        this.router.navigate(['/task', { outlets: { taskRouterOutlet: [ 'all' ] }}]);

      },err => console.log(err))
     
        
    }
  }

  get fc(){
    return this.form.controls;
  }

}
