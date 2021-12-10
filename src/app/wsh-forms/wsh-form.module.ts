import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationSelectionIndexComponent } from './index/registration-selection-index/registration-selection-index.component';
import { RegistrationFormReactiveComponent } from './reactive/registration-form-reactive/registration-form-reactive.component';
import { RegistrationFormTDComponent } from './td/registration-form-td/registration-form-td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UrlValidatorDirective } from './validator/url-validator.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    RegistrationSelectionIndexComponent,
    RegistrationFormReactiveComponent,
    RegistrationFormTDComponent,
    UrlValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule  
  ],
  exports: [
    RegistrationSelectionIndexComponent
  ]
})
export class WshFormModule { }
