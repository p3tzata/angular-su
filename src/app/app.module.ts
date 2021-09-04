import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { MainComponent } from './componentExam/main/main.component';
import { ProductComponent } from './componentExam/product/product.component';
import { ProductsComponent } from './componentExam/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoItemComponent,
    MainComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
