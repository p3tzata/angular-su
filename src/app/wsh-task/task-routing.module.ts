import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './compnent/home/home.component'

import {IndexComponent} from './compnent/index/index.component'
import { SigninComponent } from './compnent/signin/signin.component';
import { SignupComponent } from './compnent/signup/signup.component';
import {TaskCreateComponent} from './compnent/task/task-create/task-create.component'
import {TaskAllComponent} from './compnent/task/task-all/task-all.component'
import {TaskDetailComponent} from './compnent/task/task-detail/task-detail.component'
import {TaskUserComponent} from './compnent/task/task-user/task-user.component'
import { AuthGuard } from './service/authentication/guards/auth.guard';


const routes: Routes = [

  {path: "task" , component: IndexComponent,
   children: [
    {path: "", pathMatch:"full", component: HomeComponent,outlet:'taskRouterOutlet'},
    {path: "home", pathMatch:"full", component: HomeComponent,outlet:'taskRouterOutlet'},
     {path: "signin", component: SigninComponent,outlet:'taskRouterOutlet'},
     {path: "signup", component: SignupComponent,outlet:'taskRouterOutlet'},
     {path: "create", component: TaskCreateComponent,outlet:'taskRouterOutlet', canActivate: [AuthGuard]},
     {path: "all", component: TaskAllComponent,outlet:'taskRouterOutlet', canActivate: [AuthGuard]},
     {path: "detail/:id", component: TaskDetailComponent,outlet:'taskRouterOutlet', canActivate: [AuthGuard]},
     {path: "user", component: TaskUserComponent,outlet:'taskRouterOutlet', canActivate: [AuthGuard]},
   ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
