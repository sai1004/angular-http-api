import { Injectable } from "@angular/core";
import { ProductService } from "../product-page/product.service";

@Injectable({
  providedIn: "root"
})
export class CartService {
  savedCartItems: any[] = [];

  constructor(private _productsService: ProductService) {
    this.savedCartItems = _productsService.getCartItems();
  }

  showCartItems() {
    return this.savedCartItems;
  }
}
