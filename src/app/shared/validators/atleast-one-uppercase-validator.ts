import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { environment } from 'src/environments/environment';


export function atleastOneUpperCase(control: AbstractControl) {

    const atleastOneUpperCase = environment.atleastOneUpperCaseAlphabetsRegex;
    if(!control.value){
        return {
            isUppercasePresent:false
        }
    }

   let isValid = control.value && atleastOneUpperCase.test(control.value);
   if(!isValid){
       return {
        isUppercasePresent : true
       }
   }
   return null
   
   
}
