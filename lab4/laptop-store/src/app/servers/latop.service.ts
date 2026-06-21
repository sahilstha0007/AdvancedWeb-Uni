import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Laptop } from "../models/latop";

@Injectable({ providedIn: 'root' })
export class LaptopService {
  private laptopSubject = new BehaviorSubject<Laptop[]>([
    { id: 1, brand: 'Dell', model: 'XPS 13', price: 5200, description: "Premoim ultrabook" },
    { id: 2, brand: 'HP', model: 'Spectre', price: 4800, description: 'Slim and powerful' },
    { id: 3, brand: 'Lenovo', model: 'ThinkPad', price: 4500, description: 'Business laptop' }
  ]);
  laptops$ = this.laptopSubject.asObservable();
}
