import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { ErrorStateMatcherDirective } from '../../directives/error-state-matcher.directive';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent implements OnInit {

  @Input() validations: { [index: string]: string};

  @ContentChild(ErrorStateMatcherDirective, {static: true}) input: ErrorStateMatcherDirective;

  get isError() {
    if (this.input) {
      return this.input.hasError;
    } else {
      return false;
    }
  }

  get errorMessages() {
  const errors = this.input.errors;
  const messages = [];
  const keys = Object.keys(this.validations);

  keys.forEach(key => {
      if (errors[key]) {
        messages.push(this.validations[key]);
      }
    });
  return messages;
}

  ngOnInit() { }

  constructor() { }



}
