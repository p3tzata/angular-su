import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSingletonService } from './service/auth-singleton.service';
import { AuthExpectedMultiButNotService } from './service/auth-ExpectedMultiButNot.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   
  ],
  //Explain - when imort ShareModule in some 3 module, we will have 3 diffrent
  //instance fo AuthExpectedMultiButNotService so it can't be singleton, according to one lecture but I can catch that, 
  //Better to use forRoot() template.
  /*providers: [
    AuthExpectedMultiButNotService
  ]
  */

})
export class SharedModule {

  static forRoot():ModuleWithProviders<SharedModule> {
 //https://angular.io/guide/singleton-services   
// Explain - https://stackoverflow.com/questions/53186466/shared-module-imported-in-appmodule
    return {
      ngModule: SharedModule,
      providers: [
        AuthSingletonService
      ]
    }
  }

 }
