import { Injector, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSingletonService } from '../shared/service/auth-singleton.service';
import { SharedModule } from '../shared/shared.module';
import { AuthExpectedMultiButNotService } from '../shared/service/auth-ExpectedMultiButNot.service';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class EmployeeModule { 

  constructor(@Optional() authMultiService: AuthExpectedMultiButNotService,  authServiceSingleton: AuthSingletonService) {
    console.log('EmployeeModule authMultiService',authMultiService?.RandomNoInstance)
    console.log('EmployeeModule authServauthServiceSingletone',authServiceSingleton.RandomNoInstance)

  }

}
