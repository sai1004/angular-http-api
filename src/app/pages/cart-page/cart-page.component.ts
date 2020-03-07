import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"]
})
export class CartPageComponent implements OnInit {
  cartItems: any[];

  constructor(private _cartService: CartService) {
    this.cartItems = this._cartService.showCartItems();
  }

  ngOnInit(): void {}

  delete(index: number) {
    this.cartItems.splice(index, 1);
  }
}
