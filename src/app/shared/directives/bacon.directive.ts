import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({ selector: "appBacon" })
export class BaconDirective {
  ingredent = "mayo";

  constructor(elem: ElementRef, render: Renderer2) {
    let bacon = render.createText("🥓🥓🥓");
    render.appendChild(elem.nativeElement, bacon);
  }
}
