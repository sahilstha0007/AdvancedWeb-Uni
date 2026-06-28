import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  imports: [],
  templateUrl: './calc.html',
  styleUrl: './calc.css',
})
export class Calc {
  result = 0;
  addNumbers() {
    this.result = 2 + 3
  }
}

export function multiply(a: number, b: number) {
  return a * b;
}
