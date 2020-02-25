import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";

/* */

import { EmployeeCreateComponent } from "./components/employee-create/employee-create.component";
import { EmployeeCreatePageComponent } from "./pages/employee-create-page/employee-create-page.component";
import { EmployeeEditPageComponent } from "./pages/employee-edit-page/employee-edit-page.component";
import { EmployeeListPageComponent } from "./pages/employee-list-page/employee-list-page.component";
import { EmployeeEditComponent } from "./components/employee-edit/employee-edit.component";

/* */

import { RestApiService } from "../app/shared/services/rest-api.service";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeCreatePageComponent,
    EmployeeEditPageComponent,
    EmployeeListPageComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
 
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
