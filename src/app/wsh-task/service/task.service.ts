import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMsg } from '../interface/responseMsg';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private createTaskUrl="wsh-task/task/create";
  private allTaskUrl="wsh-task/task/all";
  private taskByIdUrl='wsh-task/task/details/';
  private allTaskByUserUrl="wsh-task/task/user";
  private deleteTaskUrl="wsh-task/task/delete/"
  constructor( private httpClient: HttpClient) { }

  createTask(formValue: Task) {
   return this.httpClient.post<ResponseMsg>(this.createTaskUrl, formValue)
  }

  getAllTask(){
    return this.httpClient.get<Task[]>(this.allTaskUrl);
  }

  getAllTaskByUser(){
    return this.httpClient.get<Task[]>(this.allTaskByUserUrl);
  }

  getTask(id: string) {
    return this.httpClient.get<Task>(this.taskByIdUrl + id);
  }

  deleteTask(_id:string) {
    return this.httpClient.delete(this.deleteTaskUrl + _id);
  }


  

}
