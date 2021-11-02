import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoListComponent } from '../component/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoCanDeactivateGuard implements CanDeactivate<TodoListComponent> {
  canDeactivate(
    component: TodoListComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return component.enableLeave;
  }
  
}
