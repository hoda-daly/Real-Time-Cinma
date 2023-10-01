import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seatId2SeatName'
})
export class SeatIdToSeatNamePipe implements PipeTransform {

  transform(id?: number): string {
    if(id==null)return"";
    let rowNum = Math.floor((id)/9);
    let columnNumber = id - (rowNum*9) +1;
    switch(rowNum){
      case 0: return `A${columnNumber}`;
      case 1: return `B${columnNumber}`;
      case 2: return `C${columnNumber}`;
      case 3: return `D${columnNumber}`;
      case 4: return `E${columnNumber}`;
      case 5: return `F${columnNumber}`;
    }
    return `G${columnNumber}`;
  }

}
