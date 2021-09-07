import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { MainComponent } from './componentExam/main/main.component';
import { ProductComponent } from './componentExam/product/product.component';
import { ProductsComponent } from './componentExam/products/products.component';
import { MainServiceComponent } from './serviceLearning/main-service/main-service.component';
import { TodoService } from './serviceLearning/todo.service';
import { MainRandomDeckComponent } from './randomDeck/main-random-deck/main-random-deck.component';
import { PlayingCardComponent } from './randomDeck/playing-card/playing-card.component';
import { PlayingCardTableComponent } from './randomDeck/playing-card-table/playing-card-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoItemComponent,
    MainComponent,
    ProductComponent,
    ProductsComponent,
    MainServiceComponent,
    MainRandomDeckComponent,
    PlayingCardComponent,
    PlayingCardTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:TodoService,
    useClass:TodoService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
