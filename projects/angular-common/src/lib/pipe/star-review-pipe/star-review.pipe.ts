import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starreview',
  standalone: true
})
export class StarReviewPipe implements PipeTransform {

  transform(value: number, element: any): void {
    console.log(element);
    for(let i = 0; i < value; i++){
      element.innerHTML += '&#9733;';
    }
    return element;
  }
}
