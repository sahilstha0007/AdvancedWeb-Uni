import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calc } from './math/calc/calc';
import { multiply } from './math/calc/calc';
import { MATH_MODULE } from './math/math';
import { shuffle } from "lodash-es";
@Component({
  selector: 'app-root',
  imports: [Calc, MATH_MODULE],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  multiplyNumbers() {
    return multiply(5, 4)
  }
  numbers: number[] = [1, 2, 3, 4, 5]
  shuffledArray: number[] = [];
  shuffleArray(): void {
    this.shuffleArray = shuffle(this.numbers)
  }
}
