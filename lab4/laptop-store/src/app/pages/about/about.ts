import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `<h2>About Laptop Store</h2>
    <p>We sell quality laptops!</p>`,
  // templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
