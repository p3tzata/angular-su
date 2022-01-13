import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import {EntityComponent} from './component/entity/entity.component'

const routes: Routes = [
  
  

 { path: 'list', component: ListComponent ,outlet: 'bestStyleRouterOutlet' },
  { path: 'add', component: EntityComponent ,outlet: 'bestStyleRouterOutlet' },
  { path: 'edit/:id', component: EntityComponent ,outlet: 'bestStyleRouterOutlet' },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
