import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReduxComponent } from './redux.component';

const routes: Routes = [{ path: '', component: ReduxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReduxRoutingModule { }
