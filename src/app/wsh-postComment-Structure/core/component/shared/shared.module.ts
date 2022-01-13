import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FootherComponent } from './foother/foother.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IndexComponent,
    NavigatorComponent,
    FootherComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
