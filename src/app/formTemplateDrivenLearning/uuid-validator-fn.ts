import { AbstractControl } from "@angular/forms";


function uuidValidatorFn(config: number) {
    return function uuidValidator(control: AbstractControl) {
        
        return (control.value===null || (!control.value.startsWith("00-") || control.value.length<config) ) ?  {"uuidInvalid[start with 00- and min:5]": true}  : null 
    }
}

export default uuidValidatorFn;