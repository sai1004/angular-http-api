import { Component, OnInit } from "@angular/core";
import { Products } from 'src/app/entities/Products';

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent implements OnInit {
  // products: any[] = [
  //   {
  //     name: "car",
  //     price: 11111,
  //     owner: "kirk"
  //   }
  // ];

  // shouldSayHello: Boolean = true;
  // home: Boolean = true;

  // products: any[] = [
  //   { id: 4, name: 'Laptop', rating: 3 },
  //   { id: 4, name: 'Laptop', rating: 5 },
  //   { id: 4, name: 'Laptop', rating: 4 }
  // ]

  products: Products;
  constructor() {
    
  }

  ngOnInit(): void {}
}