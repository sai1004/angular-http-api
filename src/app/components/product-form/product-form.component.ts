import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  TemplateRef
} from "@angular/core";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {
  @Input() data: any[];
  @Input() itemTemplate: TemplateRef<HTMLElement>;
  constructor() {}

  ngOnInit(): void {}
}