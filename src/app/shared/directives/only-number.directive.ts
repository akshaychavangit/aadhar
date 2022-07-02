import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  constructor(private el: ElementRef, private fromControl: NgControl) {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    // console.log(event);
    const e = event;
    if ([8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }

    // Decimal not allowed.
    if (event.key === '.' ||
        event.keyCode === 46 ||
        event.keyCode === 110 ||
        event.keyCode === 190 ) {

          event.preventDefault();
    }

    // handle '-' symbol
    // if (e.keyCode === 189 || e.keyCode === 109 ) {
    //   // ignore '-' symbol if it's already at first posotion
    //   if (e.target['value'].lastIndexOf('-') === 0) {
    //     e.preventDefault();
    //   } else {
    //     return;
    //   }
    // }

    if (e.keyCode === 189 || e.keyCode === 109 ) {
      e.preventDefault();
      // // ignore '-' symbol if it's already at first posotion
      // if (e.target['value'].lastIndexOf('-') === 0) {
      //   e.preventDefault();
      // } else {
      //   return;
      // }
    }


    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
    }
  }

  @HostListener('ngModelChange', ['$event']) change(value) {
    if (typeof value === 'string' && value.lastIndexOf(',') > 0) {
      this.fromControl.control.setValue(value.replace(/,/g, ''));
    }
  }


}
