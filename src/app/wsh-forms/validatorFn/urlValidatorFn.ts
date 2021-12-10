import { AbstractControl, ValidationErrors } from "@angular/forms";

export function urlValidatorFn() {

    return function urlVal(control: AbstractControl) {

        let re = new RegExp("^(http:\/\/|https:\/\/|)([A-z.\/]+)(.jpg|.png)$");
        if (re.test(control.value)) {
            return null
        } else {
            return {"url":true}
        }

        

    }

}