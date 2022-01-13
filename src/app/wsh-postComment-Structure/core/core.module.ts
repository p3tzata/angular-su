import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from './component/shared/shared.module';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    
  
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
