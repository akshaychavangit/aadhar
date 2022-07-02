import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumberAndDecimal]'
})
export class OnlyNumberAndDecimalDirective {

  constructor(private el: ElementRef) { }
  @Input('appOnlyNumberAndDecimal') decimalLimit: number;

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    let paste = (event.clipboardData).getData('text');
    if (isNaN(Number(paste))) {
      event.preventDefault();
    }
  }
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const e: any = event;
    const value = e.target.value;

    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
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

      if (value.lastIndexOf('.') > -1) {
        // Avoid miltiple decimal point symbols
        if (e.keyCode === 190) {
          e.preventDefault();
        }
      }
      return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    } else if (e.keyCode === 189 || e.keyCode === 109 ) {
      e.preventDefault();
    }

    if (this.decimalLimit) {
      const dotPosition = value.lastIndexOf('.');
      const inputPosition = event.target['selectionStart'];
      const temp = value.split('.');
      if (temp[1]) {
        const decimalDigitLength = temp[1].length;
        if (decimalDigitLength > (this.decimalLimit - 1) && !(inputPosition <= dotPosition)) {
          e.preventDefault();
        }
      }
    }
  }
}
