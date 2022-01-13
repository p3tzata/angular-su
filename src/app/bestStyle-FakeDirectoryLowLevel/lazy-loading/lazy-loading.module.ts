import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { ListComponent } from './component/list/list.component';
import { EntityComponent } from './component/entity/entity.component';


@NgModule({
  declarations: [
   
    ListComponent,
    EntityComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule { }
