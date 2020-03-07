import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";

/* */

import { EmployeeCreateComponent } from "./components/employee-create/employee-create.component";
import { EmployeeCreatePageComponent } from "./pages/Employee/employee-create-page/employee-create-page.component";
import { EmployeeEditPageComponent } from "./pages/Employee/employee-edit-page/employee-edit-page.component";
import { EmployeeListPageComponent } from "./pages/Employee/employee-list-page/employee-list-page.component";
import { EmployeeEditComponent } from "./components/employee-edit/employee-edit.component";
import { ProfileViewPageComponent } from "./pages/Profile/profile-view-page/profile-view-page.component";
import { ProfileEditPageComponent } from "./pages/Profile/profile-edit-page/profile-edit-page.component";
import { ProfileCreatePageComponent } from "./pages/Profile/profile-create-page/profile-create-page.component";

/* */

import { RestApiService } from "../app/shared/services/rest-api.service";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";

/* service */

import { ProductService } from "./pages/product-page/product.service";
import { CartService } from "./pages/cart-page/cart.service";
import { TodoPageComponent } from "./pages/todo-page/todo-page.component";
import { TodoItemComponent } from './components/todo-item/todo-item.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeCreatePageComponent,
    EmployeeEditPageComponent,
    EmployeeListPageComponent,
    EmployeeEditComponent,
    ProfileViewPageComponent,
    ProfileEditPageComponent,
    ProfileCreatePageComponent,
    ProductPageComponent,
    ProductFormComponent,
    CartPageComponent,
    TodoPageComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [RestApiService, ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
