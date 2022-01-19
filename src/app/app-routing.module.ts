import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './todoDb/component/about/about.component';
import { HomeComponent } from './todoDb/component/home/home.component';
import { ListComponent } from './todoDb/component/list/list.component';
import { TodoListComponent } from './todoDb/component/todo-list/todo-list.component';
import { TodoCanDeactivateGuard } from './todoDb/guard/todo-can-deactivate.guard';
import { TodoGuard } from './todoDb/guard/todo.guard';
import { TodoResolver } from './todoDb/resolver/todo.resolver';
import {TodoDetailComponent} from "./todoDb/component/todo-detail/todo-detail.component";
import {TodoList1Component} from "./todoDb/component/todo-list1/todo-list1.component";
import {TodoList2Component} from "./todoDb/component/todo-list2/todo-list2.component";
import {NotfoundComponent} from "./todoDb/component/notfound/notfound.component";
import {ChildRouterOutledChild1Component} from "./todoDb/component/child-router-outled-child1/child-router-outled-child1.component";
import {ChildRouterOutledChild2Component} from "./todoDb/component/child-router-outled-child2/child-router-outled-child2.component";
import {ChildRouterOutledComponent} from "./todoDb/component/child-router-outled/child-router-outled.component";
import {MainMoviesDbComponent} from "./moviesDb/movie-component/main-movies-db/main-movies-db.component";
import { MovieDetailComponent } from './moviesDb/movie-component/movie-detail/movie-detail.component';
import { MovieDetailResolver } from './moviesDb/movies-resolver/movie-detail.resolver';
import { MovieSearchComponent } from './moviesDb/movie-component/movie-search/movie-search.component';
import {LearningDirectiveComponent} from './directiveLearnging/component/learning-directive/learning-directive.component'
import {FormTDComponent} from './formTemplateDrivenLearning/form-td/form-td.component'
import {FormRComponent} from './formReactiveLearning/form-r/form-r.component'
import { WshFormRoutingModule } from './wsh-forms/wsh-form-routing.module';
//import {TaskRoutingModule } from './wsh-task/task-routing.module'
import {PipeLearningComponent} from './pipeAuthInterc/pipe-learning/pipe-learning.component'
import { IndexComponent } from './wsh-task/compnent/index/index.component';
import {IndexComponent as WshPostComentIndexComponent} from './wsh-postComment-Structure/core/component/shared/index/index.component'
import {IndexComponent as BestStyleIndexCompnent} from './bestStyle-FakeDirectoryLowLevel/core/component/index/index.component'

// This is userfriendly for Google bot.
// When we set array in .ts. that is not userfriendly.

const routes: Routes = [
  
  
  
  {
    path: 'pipeLearning' , component: PipeLearningComponent
  },
  
  
  {path: 'learningDirective', component: LearningDirectiveComponent},
  {path: 'form-td', component: FormTDComponent},
  {path: 'form-r', component: FormRComponent},
  
  
  {path: 'movieDb',
   children: [
    {path: '', pathMatch:"full" ,component: MainMoviesDbComponent}, 
    {path: 'detail/:id', component: MovieDetailComponent, resolve: {detailResolve: MovieDetailResolver}},
     {path: 'search/:queryString', component: MovieSearchComponent}
   ]
  }, 

  


  {path: '',
   pathMatch: "full",
  redirectTo: "home"
  },
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
  {path: "todo-list/detail/:id",
   component: TodoDetailComponent
  },


  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent
  },
  {path: 'todo',
  children: [
    {path: "list1",
    component: TodoList1Component},
    {path: "list2",
    component: TodoList2Component}
  ]

  },
  {path: "child-router-outlet",
  component: ChildRouterOutledComponent,
  children: [
    {path: "child1",
    component: ChildRouterOutledChild1Component,
    outlet:'childRouterOutlet'},
    {path: "child2",
    component: ChildRouterOutledChild2Component,
    outlet:'childRouterOutlet'}
  ]
  }, 
  
  {path: 'task',component: IndexComponent, loadChildren: () => import ("./wsh-task/task.module").then(m => m.TaskModule)},
  
  {path: 'bestStyle', component: BestStyleIndexCompnent},
  
  { path: 'bestStyle/lazyLoadingUrl',component: BestStyleIndexCompnent, loadChildren: () => import('./bestStyle-FakeDirectoryLowLevel/lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  
  
  
  { path: 'postComentStructure',component: WshPostComentIndexComponent, loadChildren: () => import('./wsh-postComment-Structure/core/core.module').then(m => m.CoreModule) },
  
  
  
  { path: 'redux', loadChildren: () => import('./redux/redux.module').then(m => m.ReduxModule) },
  
  
  
  
  
  
  
  

 

  {path: "**",
  component: NotfoundComponent},
  


];

@NgModule({
  //imports: [RouterModule.forRoot(routes),TaskRoutingModule,WshFormRoutingModule],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules, //Explain: this will load and lazy-loading module 
                                            //despite of that they be called
    enableTracing: false //Expain this is good for debugging
  }),WshFormRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
