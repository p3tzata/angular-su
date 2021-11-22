import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ITodoTask } from '../../../interfaces';
import { TodoService } from '../../service/todo.service';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  id:number;
  todo!: ITodoTask;
  constructor(private route:ActivatedRoute, private todoService: TodoService) {
    //Explain: this is used when dynamic change url, without recreate the component
    route.params.subscribe((x: Params) => console.log(x["id"]));
   
    this.id=route.snapshot.params.id
    console.log(this.id);
    console.log(route.snapshot.queryParamMap.get("test"));

   }

  ngOnInit(): void {

    this.todoService.loadExternal<ITodoTask>(this.id).subscribe(x => {console.log(x);this.todo=x;});
  }

}
