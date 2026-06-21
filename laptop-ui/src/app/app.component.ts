import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Add this

@Component({
  selector: 'app-root',
  standalone: true, // <-- Add this if using standalone
  imports: [CommonModule], // <-- Add this for *ngFor
  template:
    '<h1>2026 Laptop Store</h1><div *ngFor="let l of laptops">{{ l.brand }} - {{ l.modelName }} (${{ l.price }})</div>',
})
export class AppComponent implements OnInit {
  laptops: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('http://localhost:3000/api/laptops')
      .subscribe((data: any) => (this.laptops = data));
  }
}
