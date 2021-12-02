import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import uuidValidatorFn from './uuid-validator-fn';

@Directive({
  selector: '[appUuidValidator]',
  //Explain 
  // this will merge NG_VALIDATORS and our validator
  // we use multi: true because NG_VALIDATORS are array
  providers: [
    {provide: NG_VALIDATORS,
     useExisting: UuidValidatorDirective,
    multi: true
    }
  ]
})
export class UuidValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null{
      //Explain this is double call. This is posible becaulse first call return other(second) function which is called too.
      return uuidValidatorFn(5)(control);
  }


}
