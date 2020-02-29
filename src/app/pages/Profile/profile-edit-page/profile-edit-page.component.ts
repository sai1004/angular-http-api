import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { BaconDirective } from "src/app/shared/directives/bacon.directive";

@Component({
  selector: "app-profile-edit-page",
  templateUrl: "./profile-edit-page.component.html",
  styleUrls: ["./profile-edit-page.component.css"]
})
export class ProfileEditPageComponent implements OnInit, AfterViewInit {
  @ViewChild("spanEle") span: any;

  @ViewChild("para")
  para: ElementRef;

  extraIngredient: string;

  @ViewChild(BaconDirective)
  set appBacon(directive: BaconDirective) {
    this.extraIngredient = directive.ingredent;
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.span);
    console.log("Values on ngAfterViewInit():");
    console.log("Paragraph: ", this.para.nativeElement);
    console.log(this.extraIngredient); 
  }
}
