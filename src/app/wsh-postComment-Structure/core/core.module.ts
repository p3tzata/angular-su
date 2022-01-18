import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from './component/shared/shared.module';
import { HomeComponent } from '../home/home.component';
import {CollapseDirective} from '../core/component/shared/navigator/collapse.directive'
import {DropdownDirective} from '../core/component/shared/navigator/dropdown.directive'


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
