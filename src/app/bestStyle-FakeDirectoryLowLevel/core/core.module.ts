import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './component/nav/nav.component';
import {  RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';




@NgModule({
  declarations: [
    NavComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule //Explain: this only will import directives.
  ]
})
export class CoreModule {
  //https://angular.io/guide/singleton-services
  //Explain - this module have to be imported, this is achieved with: 
  //@SkipSelf - skip providers of CoreModule, anyway its providers is empty; look up in the parent providers(injector)
  //@Optional-  If the dependency is not found, then it be undefine instead of throwing an error
  //To guard against a lazy loaded module re-importing
  //Only the root AppModule should import the CoreModule. If a lazy-loaded module imports it too, the application can generate multiple instances of a service.
  constructor(@SkipSelf() @Optional() module: CoreModule){

    if (module) {
      throw new Error('Core module must be imorted only one time');
    }

  }

 }
