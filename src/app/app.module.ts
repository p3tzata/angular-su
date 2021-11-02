import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './todoDb/component/list/list.component';

import { MainComponent } from './componentExam/main/main.component';
import { ProductComponent } from './componentExam/product/product.component';
import { ProductsComponent } from './componentExam/products/products.component';
import { MainServiceComponent } from './serviceLearning/main-service/main-service.component';
import { TodoService } from './serviceLearning/todo.service';

import { MoviesDbNavBarComponent } from './moviesDb/movie-component/movies-db-nav-bar/movies-db-nav-bar.component';
import { MoviesDbPageLandingComponent } from './moviesDb/movie-component/movies-db-page-landing/movies-db-page-landing.component';
import { MoviesComponent } from './moviesDb/movie-component/movies/movies.component';
import { MovieComponent } from './moviesDb/movie-component/movie/movie.component';
import { MainMoviesDbComponent } from './moviesDb/movie-component/main-movies-db/main-movies-db.component';
import { FooterComponent } from './moviesDb/movie-component/footer/footer.component';
import { TodoItemComponent } from './todoDb/component/todo-item/todo-item.component';
import { TodoModule } from './todoDb/module/todo/todo.module';
import { HomeComponent } from './todoDb/component/home/home.component';
import { AboutComponent } from './todoDb/component/about/about.component';
import { CoreModule } from './core/core.module';
import { TodoListComponent } from './todoDb/component/todo-list/todo-list.component';

import { FormsModule } from '@angular/forms';


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
    MovieComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ,TodoModule
    ,CoreModule
    ,FormsModule
  ],
  providers: [
    {provide:TodoService,
    useClass:TodoService} //This is not necessary when provideIn is used.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
