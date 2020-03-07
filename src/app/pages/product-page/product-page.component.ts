import { Component, OnInit } from "@angular/core";
import { Products } from "src/app/entities/Products";
import { ProductService } from "./product.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent implements OnInit {
  products: any[];

  constructor(private _productsService: ProductService) {
    this.products = _productsService.getProducts();
  }

  ngOnInit(): void {}

  addTocart(product: any): void {
     

  }
}
