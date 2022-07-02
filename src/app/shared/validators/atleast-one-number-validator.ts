import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { environment } from 'src/environments/environment';


export function atleastOneNumber(control: AbstractControl) {

    const atleastOneNumber = environment.atleastOneNumbersRegex;

    if(!control.value){
        return {
            isNumberPresent:false
        }
    }

   let isValid = control.value && atleastOneNumber.test(control.value);
   if(!isValid){
       return {
        isNumberPresent : true
       }
   }
   return null
   
   
}
