import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import {urlValidatorFn} from '../validatorFn/urlValidatorFn'

@Directive({
  selector: '[appUrlValidator]',
  providers: [
    {provide: NG_VALIDATORS,
     useExisting: UrlValidatorDirective,
    multi: true
    }
  ]

})
export class UrlValidatorDirective implements Validator {

  constructor() { 
    
  }


  validate(control: AbstractControl): ValidationErrors | null {
    
    return urlValidatorFn()(control);

  }
  

}


