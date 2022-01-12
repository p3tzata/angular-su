import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AuthSingletonService } from '../shared/service/auth-singleton.service';
import { AuthExpectedMultiButNotService } from '../shared/service/auth-ExpectedMultiButNot.service';
import { SomeDBService } from '../shared/service/some-db.service';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule, //Explain this is needed, nevertheless these 'ShareModule' and 'UserModule' are being in imorts of AppModule
    CoreModule,
  ]
})
export class UserModule {

  constructor(@Optional() authMultiService: AuthExpectedMultiButNotService, 
     authServiceSingleton: AuthSingletonService,
    someDBservice: SomeDBService) {
    console.log('UserModule authMultiService',authMultiService?.RandomNoInstance)
    console.log('UserModule authServauthServiceSingletone',authServiceSingleton.RandomNoInstance)
    
    console.log('someDBservice',someDBservice)
  }
 }
