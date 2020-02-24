import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ShadowDirective } from "./directives/shadow.directive";

@NgModule({
  imports: [FlexLayoutModule, FormsModule, MaterialModule, HttpClientModule],

  declarations: [ShadowDirective],

  exports: [
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    ShadowDirective
  ],

  providers: []
})
export class SharedModule {}
