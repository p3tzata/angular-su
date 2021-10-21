import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
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
import { MainMoviesDbComponent } from './moviesDb/main-movies-db/main-movies-db.component';
import { MoviesDbNavBarComponent } from './moviesDb/movies-db-nav-bar/movies-db-nav-bar.component';
import { MoviesDbPageLandingComponent } from './moviesDb/movies-db-page-landing/movies-db-page-landing.component';
import { MoviesComponent } from './moviesDb/movies/movies.component';
import { MovieComponent } from './moviesDb/movie/movie.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoItemComponent,
    MainComponent,
    ProductComponent,
    ProductsComponent,
    MainServiceComponent,
    MainMoviesDbComponent,
    MoviesDbNavBarComponent,
    MoviesDbPageLandingComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:TodoService,
    useClass:TodoService} //This is not necessary when provideIn is used.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
