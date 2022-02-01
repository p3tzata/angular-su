import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReduxRoutingModule } from './redux-routing.module';
import { ReduxComponent } from './component/reduxIndex/redux.component';

import { CalculatorComponent } from './component/calculator/calculator.component';
import { UserListWithResolverComponent } from './component/user-list-with-resolver/user-list-with-resolver.component';
import {UserEffect} from './+store/reducer/user/user.effect'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {reducersForUserFeature} from './+store/';
import { BooksOfUserComponent } from './component/books-of-user/books-of-user.component';
import { AddBookComponent } from './component/add-book/add-book.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReduxComponent,
    CalculatorComponent,
    UserListWithResolverComponent,
    BooksOfUserComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    ReduxRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('userModule',reducersForUserFeature),
    EffectsModule.forFeature([UserEffect])
  ],
  providers: [
   // UserListResolver
   UserEffect
  ]
})
export class ReduxModule { }
