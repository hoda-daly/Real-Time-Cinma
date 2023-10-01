
import { Pipe, PipeTransform } from '@angular/core';
import { Seat } from 'src/app/Model/cinema-court';

@Pipe({
  name: 'seatToClass',
  pure: true
})
export class SeatToClassPipe implements PipeTransform {

  transform(value: Seat, customerId?:string): string {
    if(!value.userId) return 'avalible';
    if(value.userId == customerId) return 'my-seat';
    return 'taken';
  }

}
