import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'new'
})
export class NewPipe implements PipeTransform {

  transform(value: number): any {
    if(value > 500) return value;
    
  }

}
