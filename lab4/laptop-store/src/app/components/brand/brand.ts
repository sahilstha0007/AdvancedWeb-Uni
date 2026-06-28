import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-brand',
  template: `<h2> {{brandName}}</h2>`,
  styles: [`h2{color:#ff4081}`]
  // templateUrl: './brand.html',
})
export class Brand {
  @Input() brandName = '';
}
