import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor() {}

  cartItems: any[] = [];

  getProducts() {
    return [
      { id: 1, name: "Laptop", rating: 3, price: 200 },
      { id: 2, name: "bike", rating: 5, price: 300 },
      { id: 3, name: "car", rating: 4, price: 200 }
    ];
  }

  getCartItems() {
    return this.cartItems;
  }

  saveToCart(itemFromProduct: any) {
    console.log(itemFromProduct);
    this.cartItems.push(itemFromProduct);
  }
}
