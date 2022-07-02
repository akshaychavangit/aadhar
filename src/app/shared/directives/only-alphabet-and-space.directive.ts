import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyAlphabetAndSpace]'
})
export class OnlyAlphabetAndSpaceDirective {

  constructor() { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const e = event;
    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }

    // Decimal not allowed.
    // Ctrl+V not allowed.

    // To do not allow space at the beginning
    if (event.key === ' ' || event.keyCode === 32) {
      const position = event.target['selectionStart'];
      if (position === 0 ) {
        event.preventDefault();
      }
    }

    if ((event.key === '.'||event.keyCode === 110 ||event.keyCode === 190) ||  
        ( e.keyCode === 86 && (e.ctrlKey || e.metaKey))) {
          event.preventDefault();
    }

    if(!(event.key === ' ' || event.keyCode === 32) && (e.keyCode < 65 || e.keyCode > 90)) {
      e.preventDefault();
    }
 }

}
