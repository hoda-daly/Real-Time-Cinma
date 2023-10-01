import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    const hour  = Math.floor(value / 60);

    return hour > 0 ? hour + ' hr ' + (value % 60) + ' minutes' : value + ' minutes';
  }

}
