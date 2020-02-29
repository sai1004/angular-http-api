import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ShadowDirective } from "./directives/shadow.directive";
import { BaconDirective } from "./directives/bacon.directive";

@NgModule({
  imports: [FlexLayoutModule, FormsModule, MaterialModule, HttpClientModule],

  declarations: [ShadowDirective, BaconDirective],

  exports: [
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    ShadowDirective,
    BaconDirective
  ],

  providers: []
})
export class SharedModule {}
