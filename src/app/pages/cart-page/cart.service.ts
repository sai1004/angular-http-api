import { Injectable } from "@angular/core";
import { ProductService } from "../product-page/product.service";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private _productsService: ProductService) {}
  showCartItems() {
    return [];
  }
}
