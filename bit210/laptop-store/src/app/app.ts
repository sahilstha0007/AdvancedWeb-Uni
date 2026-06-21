import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, MatCard, MatCardContent, MatCardTitle, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  searchText = '';
  protected readonly title = signal('Sessyyy-store');
  laptopName: string = 'Dell XPS 13';
  price: number = 6500;
  available: boolean = true;

  selectedLaptop: string = '';

  laptops: { name: string; price: number; stock: boolean }[] = [
    { name: 'Dell XPS', price: 6500, stock: true },
    { name: 'MacBook Pro', price: 8500, stock: false },
  ];

  getImageUrl(): string {
    return 'assets/images/123.webp';
  }
  addToCart() {
    alert(this.laptopName + ' added to cart');
  }
}
