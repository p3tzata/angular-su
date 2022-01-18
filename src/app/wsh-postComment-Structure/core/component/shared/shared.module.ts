import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index/index.component'
import {NavigatorComponent} from './navigator/navigator.component'
import {FootherComponent} from './foother/foother.component'
import { RouterModule } from '@angular/router';
import { CollapseDirective } from './navigator/collapse.directive';
import { DropdownDirective } from './navigator/dropdown.directive';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    IndexComponent,
    NavigatorComponent,
    CollapseDirective,
    DropdownDirective,
    FootherComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
