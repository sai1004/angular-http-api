import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor() {}

  getProducts() {
    return [
      { id: 1, name: "Laptop", rating: 3, price: 200 },
      { id: 2, name: "bike", rating: 5, price: 300 },
      { id: 3, name: "car", rating: 4, price: 200 }
    ];
  }

  getCartItems() {}

  saveToCart(itemFromProduct: any) {}
}
