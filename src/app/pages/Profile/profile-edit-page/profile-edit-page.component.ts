import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-profile-edit-page",
  templateUrl: "./profile-edit-page.component.html",
  styleUrls: ["./profile-edit-page.component.css"]
})
export class ProfileEditPageComponent implements OnInit, AfterViewInit {
  @ViewChild("spanEle") span: any;

  @ViewChild("para")
  para: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.span);
    console.log("Values on ngAfterViewInit():");
    console.log("Paragraph: ", this.para.nativeElement);
  }
}
