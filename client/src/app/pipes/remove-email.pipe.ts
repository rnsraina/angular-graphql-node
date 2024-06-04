import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeEmail',
  standalone: true
})
export class RemoveEmailPipe implements PipeTransform {

  transform(value: string): unknown {
    return value && value.split('@')[0];;
  }
}
