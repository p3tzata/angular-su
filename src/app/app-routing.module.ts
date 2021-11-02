import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './todoDb/component/about/about.component';
import { HomeComponent } from './todoDb/component/home/home.component';
import { ListComponent } from './todoDb/component/list/list.component';
import { TodoListComponent } from './todoDb/component/todo-list/todo-list.component';
import { TodoCanDeactivateGuard } from './todoDb/guard/todo-can-deactivate.guard';
import { TodoGuard } from './todoDb/guard/todo.guard';
import { TodoResolver } from './todoDb/resolver/todo.resolver';
// This is userfriendly for Google bot.
// When we set array in .ts. that is not userfriendly.

const routes: Routes = [
  {path: '',
   pathMatch: "full",
  redirectTo: "home"},
   {
     path: 'home',
     component: HomeComponent
   },
  {
    path: 'todo-list/yyy',
    pathMatch: 'full',
    component: ListComponent
  },
  {
    path: 'todo-list',
    pathMatch: 'full',
    resolve: [TodoResolver], // Това url ще бъде достъпно само ако са дошли данните. Няма нужда да слагаме if-ве ако 
                              // не са дощли още данните еди какво си.
    canActivate: [TodoGuard],
    canDeactivate: [TodoCanDeactivateGuard],
    component: TodoListComponent
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
