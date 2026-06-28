import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-nav-items',
  imports: [],
  styleUrl: './nav-items.css',
  template: ` <button (click)="select('home')">Home</button>
    <button (click)="select('enquiry')">Enquiry</button>`,
})
export class NavItems {
  @Output() navigate = new EventEmitter<string>();

  select(page: string) {
    this.navigate.emit(page);
  }
}
