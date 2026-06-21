import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseBrand',
  standalone: true
})
export class UppercaseBrandPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
