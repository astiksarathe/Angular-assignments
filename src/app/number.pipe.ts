import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(number: number): string {
    if (number < 100) {
      return number + ' (low)';
    } else if (number >= 100 && number < 1000) {
      return number + ' (high)';
    } else {
      return number + ' (infinite)';
    }
  }

}



