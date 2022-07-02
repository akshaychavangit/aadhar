import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aadharNumber'
})
export class AadharNumberPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(value){
      value = value.split("")
      for (let index = 0; index < value.length; index++) {
        let element =  value[index]
        if(index % 4 == 0 && index !== 0){
          value[index] = " " + element ;
        }
      }
      return value.join("")
    }
    return null;
  }

}
