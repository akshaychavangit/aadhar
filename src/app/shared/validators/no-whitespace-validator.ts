import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { environment } from 'src/environments/environment';


export function noWhiteSpace(control: AbstractControl) {

    const noWhiteSpace = environment.noWhiteSpaces;

    if(!control.value){
        return {
            isWhitespacePresent:false
        }
    }

   let isValid = control.value && noWhiteSpace.test(control.value);
   if(!isValid){
       return {
        isWhitespacePresent : true
       }
   }
   return null
   
   
}
