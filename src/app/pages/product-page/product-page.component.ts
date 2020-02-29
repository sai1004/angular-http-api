import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent implements OnInit {
  products: any[] = [
    {
      name: "car",
      price: 11111,
      owner: "kirk"
    }
  ];

  shouldSayHello: Boolean = true;
  home: Boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
