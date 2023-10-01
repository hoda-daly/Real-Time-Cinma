
import { Pipe, PipeTransform } from '@angular/core';
import { Seat } from 'src/app/Model/cinema-court';

@Pipe({
  name: 'seatToInfo'
})
export class SeatToInfoPipe implements PipeTransform {

  transform(value: Seat, customerId?:string): string {
    if(!value.userId) return 'avalible seate';
    if(value.userId == customerId) return 'my seat';
    return 'taken seate';
  }

}
