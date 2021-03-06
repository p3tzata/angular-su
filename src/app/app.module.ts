import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
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
import { CoreModule as CoreModuleBestStyle } from './bestStyle-FakeDirectoryLowLevel/core/core.module';
import { TodoListComponent } from './todoDb/component/todo-list/todo-list.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TodoDetailComponent } from './todoDb/component/todo-detail/todo-detail.component';
import { TodoList1Component } from './todoDb/component/todo-list1/todo-list1.component';
import { TodoList2Component } from './todoDb/component/todo-list2/todo-list2.component';
import { NotfoundComponent } from './todoDb/component/notfound/notfound.component';
import { ChildRouterOutledComponent } from './todoDb/component/child-router-outled/child-router-outled.component';
import { ChildRouterOutledChild1Component } from './todoDb/component/child-router-outled-child1/child-router-outled-child1.component';
import { ChildRouterOutledChild2Component } from './todoDb/component/child-router-outled-child2/child-router-outled-child2.component';
import { MovieDetailComponent } from './moviesDb/movie-component/movie-detail/movie-detail.component';
import { MovieSearchComponent } from './moviesDb/movie-component/movie-search/movie-search.component';
import { MovieModule } from './moviesDb/movie-component/movie.module';
import { HiLightDirective } from './directiveLearnging/hi-light.directive';
import { LearningDirectiveComponent } from './directiveLearnging/component/learning-directive/learning-directive.component';
import { FormTDComponent } from './formTemplateDrivenLearning/form-td/form-td.component';
import { UuidValidatorDirective } from './formTemplateDrivenLearning/uuid-validator.directive';
import { FormRComponent } from './formReactiveLearning/form-r/form-r.component';
import { FormRFbServiceComponent } from './formReactiveLearning/form-r-fb-service/form-r-fb-service.component';
import { WshFormModule} from './wsh-forms/wsh-form.module'
import { WshFormRoutingModule } from './wsh-forms/wsh-form-routing.module';
import { PipeLearningComponent } from './pipeAuthInterc/pipe-learning/pipe-learning.component';
import { PostCountPipe } from './pipeAuthInterc/post-count.pipe';
import { PostCountPurePipe } from './pipeAuthInterc/post-count-pure.pipe';
import { UserListComponent } from './pipeAuthInterc/user-list/user-list.component';
import { httpInterceptorProviders } from './pipeAuthInterc/innterceptior/interceptor.barrel';
import { wshTaskInterceptorProviders } from './wsh-task/service/interceptor/interceptor.barrel';
import {wshPostComentStrcInterceptorProviders} from './wsh-postComment-Structure/core/interceptor/interceptor.barrel'
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './bestStyle-FakeDirectoryLowLevel/shared/shared.module';
import { UserModule } from './bestStyle-FakeDirectoryLowLevel/user/user.module';
import { EmployeeModule } from './bestStyle-FakeDirectoryLowLevel/employee/employee.module';
import {StoreModule} from '@ngrx/store'
//import {TaskModule} from './wsh-task/task.module'
import {reducersForRoot} from './redux/+store/'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {EffectsModule} from '@ngrx/effects'
import {metaReducers} from './redux/+store/meta-reducer'
import {JwtStoreInterceptor} from './redux/service/jwt-store.interceptor';
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import {CustomSerializer} from './redux/+store/routeStore-serializer'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoItemComponent,
    MainComponent,
    ProductComponent,
    ProductsComponent,
    MainServiceComponent,
    
    // MoviesDbNavBarComponent,
    // MoviesDbPageLandingComponent,
    // MoviesComponent,
    // MovieComponent,
    // MovieDetailComponent,
    // MovieSearchComponent,
    
    
    HomeComponent,
    AboutComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoList1Component,
    TodoList2Component,
    NotfoundComponent,
    ChildRouterOutledComponent,
    ChildRouterOutledChild1Component,
    ChildRouterOutledChild2Component,
    HiLightDirective,
    LearningDirectiveComponent,
    LearningDirectiveComponent,
    FormTDComponent,
    UuidValidatorDirective,
    FormRComponent,
    FormRFbServiceComponent,
    PipeLearningComponent,
    PostCountPipe,
    PostCountPurePipe,
    UserListComponent,


    
  ],
  imports: [
   // BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TodoModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MovieModule,
    ToastrModule.forRoot(),
    //TaskModule,
    CoreModuleBestStyle,
    SharedModule.forRoot(),
    //SharedModule,
    UserModule,
    EmployeeModule,
    StoreModule.forRoot(reducersForRoot,{metaReducers}), //Explain: forFeature() is for feature module(not root/app module). this is same of forChild();
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    })
  ],
  providers: [
    {provide:TodoService,
    useClass:TodoService}, //This is not necessary when provideIn is used.
   // httpInterceptorProviders,
   { provide: HTTP_INTERCEPTORS, useClass: JwtStoreInterceptor, multi: true },
   wshTaskInterceptorProviders,
   wshPostComentStrcInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
