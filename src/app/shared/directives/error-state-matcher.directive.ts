import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appErrorStateMatcher]'
})
export class ErrorStateMatcherDirective {

  @Input() submitted = false; // default submitted set to true will help with showing errors is no input is provided
  constructor(private formControl: NgControl) { }

  get hasError() {
    return (this.formControl.dirty && this.formControl.invalid && this.formControl.touched) || (this.formControl.invalid && this.submitted);
  }

  get errors() {
    if (this.hasError && this.formControl.errors) {
      const errors = this.formControl.errors;
      if (errors.pattern && errors.minlength) {
        delete errors.minlength;
      }
      if (errors.pattern && errors.maxlength) {
        delete errors.maxlength;
      }

      if (errors.pattern && errors.min) {
        delete errors.min;
      }
      if (errors.pattern && errors.max) {
        delete errors.max;
      }

      if (errors.max && errors.maxlength) {
        delete errors.maxlength;
      }

      if (errors.max && errors.min) {
        delete errors.min;
      }

      if (errors.whitespace) {
        for (const key in errors) {
          if (errors.hasOwnProperty(key) && key !== 'whitespace') {
            delete errors[key];
          }
        }
        delete errors.pattern;
      }
      return errors;
    }
    return '';
  }

}
