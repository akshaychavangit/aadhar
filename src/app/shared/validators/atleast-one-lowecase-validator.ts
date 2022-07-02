import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { environment } from 'src/environments/environment';


export function atleastOneLowerCase(control: AbstractControl) {

    const atleastOneLowerCase = environment.atleastOneLowerCaseAlphabetsRegex;
    if(!control.value){
        return {
            isLowercasePresent:false
        }
    }

   let isValid = control.value && atleastOneLowerCase.test(control.value);
   if(!isValid){
       return {
           isLowercasePresent : true
       }
   }
   return null
   
   
}
