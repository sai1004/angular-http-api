import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Products } from "src/app/entities/Products";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor() {}

  // private products = new Subject();

  products: Products[] = [
    { id: 1, name: "Laptop", rating: 3, price: 200 },
    { id: 2, name: "bike", rating: 5, price: 300 },
    { id: 3, name: "car", rating: 4, price: 200 }
  ];


  // products$ = this.products.asObservable();


  getProducts() {
    return this.products;
  }

  getCartItems() {}

  saveToCart(itemFromProduct: any) {}
}
