import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { environment } from 'src/environments/environment';


export function atleastOneSpecialChar(control: AbstractControl) {

    const atleastOneSpecialCharacters = environment.atleastOneSpecialCharactersRegex;

    if(!control.value){
        return {
            isSpecialCharacterPresent:false
        }
    }

   let isValid = control.value && atleastOneSpecialCharacters.test(control.value);
   if(!isValid){
       return {
        isSpecialCharacterPresent : true
       }
   }
   return null
   
   
}
