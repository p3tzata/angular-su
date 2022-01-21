import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReduxRoutingModule } from './redux-routing.module';
import { ReduxComponent } from './component/reduxIndex/redux.component';

import { CalculatorComponent } from './component/calculator/calculator.component';
import { UserListWithResolverComponent } from './component/user-list-with-resolver/user-list-with-resolver.component';
import { UserListResolver } from './guard/user-list.resolver';
import {StoreModule} from '@ngrx/store'
import {reducersForUserFeature} from './+store/'

@NgModule({
  declarations: [
    ReduxComponent,
    CalculatorComponent,
    UserListWithResolverComponent
  ],
  imports: [
    CommonModule,
    ReduxRoutingModule,
    StoreModule.forFeature('userModule',reducersForUserFeature)
  ],
  providers: [
   // UserListResolver
  ]
})
export class ReduxModule { }
