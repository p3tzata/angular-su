import { Injectable } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { ITodoTask } from 'src/app/interfaces';
import { TodoService } from '../service/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<ITodoTask[]> {
  constructor(private todoService: TodoService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodoTask[]> {
   // debugger;
    return this.todoService.loadExternal<ITodoTask[]>().pipe(delay(300)).pipe(tap(x=>console.log(x)));
  }
}
