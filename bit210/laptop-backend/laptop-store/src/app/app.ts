import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
})
export class App {
  laptopsJSON = signal<any[]>([]);
  laptopsXML = signal<any[]>([]);
  orderMessage = signal('');

  constructor(private http: HttpClient) {}

  // JSON HttpClient
  loadJSON() {
    this.http.get<any[]>('http://localhost:3000/api/laptops-json').subscribe((data) => {
      this.laptopsJSON.set(data);
    });
  }

  // XML HttpClient
  loadXML() {
    this.http
      .get('http://localhost:3000/api/laptops-xml', {
        responseType: 'text',
      })
      .subscribe((xmlString) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
        const laptops = xmlDoc.getElementsByTagName('laptop');
        const arr: any[] = [];

        for (let i = 0; i < laptops.length; i++) {
          arr.push({
            id: laptops[i].getElementsByTagName('id')[0].textContent,
            name: laptops[i].getElementsByTagName('name')[0].textContent,
            price: laptops[i].getElementsByTagName('price')[0].textContent,
          });
        }

        this.laptopsXML.set(arr);
      });
  }

  // Place order
  placeOrder() {
    this.http
      .post<any>('http://localhost:3000/api/order', {
        laptopId: 1,
        quantity: 2,
      })
      .subscribe((res) => {
        this.orderMessage.set(res.message);
      });
  }
}
