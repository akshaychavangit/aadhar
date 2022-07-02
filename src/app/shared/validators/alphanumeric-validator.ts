import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { environment } from 'src/environments/environment';


export function alphanumeric(control: AbstractControl) {

    const alphanumeric = environment.onlyAlphaNumeric;

    if(!control.value){
        return {
            isAlphanumeric:false
        }
    }

   let isValid = control.value && alphanumeric.test(control.value);
   if(!isValid){
       return {
        isAlphanumeric : true
       }
   }
   return null
   
   
}
