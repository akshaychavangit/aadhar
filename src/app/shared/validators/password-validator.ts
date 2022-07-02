import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { environment } from 'src/environments/environment';


export function validPassword(control: AbstractControl) {
    const atleastOneLowerCase = environment.atleastOneLowerCaseAlphabetsRegex;
    const atleastOneUpperCase = environment.atleastOneUpperCaseAlphabetsRegex;
    const atleastOneNumbers = environment.atleastOneNumbersRegex;
    const atleastOneSpecialCharacters = environment.atleastOneSpecialCharactersRegex;

    if (!control.value) {
      return {
        is_not_empty: false,
        is_lowercase_present: false,
        is_uppercase_present: false,
        is_number_present: false,
        is_special_character_present: false,
        is_minimum_length: false
      };
    }

    const isValid = control.value && atleastOneLowerCase.test(control.value) &&  atleastOneUpperCase.test(control.value)
       && atleastOneNumbers.test(control.value) && atleastOneSpecialCharacters.test(control.value) && control.value.length >= 8 && control.value.length <= 16;


    if (!isValid) {
      return {
        is_not_empty: control.value,
        is_lowercase_present: atleastOneLowerCase.test(control.value),
        is_uppercase_present: atleastOneUpperCase.test(control.value),
        is_number_present: atleastOneNumbers.test(control.value),
        is_special_character_present: atleastOneSpecialCharacters.test(control.value),
        is_minimum_length: ((control.value && control.value.length >= 8 && control.value.length <= 16))
      };
    }
    return null;
}
