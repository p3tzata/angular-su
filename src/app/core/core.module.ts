import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './component/navigator/navigator.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [NavigatorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigatorComponent]
})
export class CoreModule { }
