import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReduxComponent } from './component/reduxIndex/redux.component';
import { UserListWithResolverComponent } from './component/user-list-with-resolver/user-list-with-resolver.component';
import {CalculatorComponent} from './component/calculator/calculator.component'
import { UserListResolver } from './guard/user-list.resolver';

const routes: Routes = [
  { path: '', component: ReduxComponent },
  {path: 'calculator', component: CalculatorComponent},
  {path: 'userListWithResolver', component: UserListWithResolverComponent,resolve:[UserListResolver]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReduxRoutingModule { }
