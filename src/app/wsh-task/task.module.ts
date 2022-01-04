import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task-routing.module';
import { IndexComponent } from './compnent/index/index.component';
import { HomeComponent} from './compnent/home/home.component';
import {CollapseDirective} from './compnent/navigation/collapse.directive'
import {DropdownDirective} from './compnent/navigation/dropdown.directive';
import { NavigationComponent } from './compnent/navigation/navigation.component';
import {SigninComponent} from './compnent/signin/signin.component'
import {SignupComponent} from './compnent/signup/signup.component'
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import {wshTaskInterceptorProviders} from './service/interceptor/interceptor.barrer';
import { TaskAllComponent } from './compnent/task/task-all/task-all.component';
import { TaskUserComponent } from './compnent/task/task-user/task-user.component';
import { TaskDetailComponent } from './compnent/task/task-detail/task-detail.component';
import { TaskCreateComponent } from './compnent/task/task-create/task-create.component'

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    CollapseDirective,
    DropdownDirective,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    TaskAllComponent,
    TaskUserComponent,
    TaskDetailComponent,
    TaskCreateComponent,

    
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule
  ], 
  providers: [
    wshTaskInterceptorProviders
  ]
})
export class TaskModule { }
