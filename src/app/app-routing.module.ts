import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeListPageComponent } from "./pages/Employee/employee-list-page/employee-list-page.component";
import { ProfileViewPageComponent } from "./pages/Profile/profile-view-page/profile-view-page.component";
import { ProfileEditPageComponent } from "./pages/Profile/profile-edit-page/profile-edit-page.component";
import { ProfileCreatePageComponent } from "./pages/Profile/profile-create-page/profile-create-page.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  { path: "emp-list", component: EmployeeListPageComponent },
  { path: "profile-view", component: ProfileViewPageComponent },
  { path: "profile-edit", component: ProfileEditPageComponent },
  { path: "profile-create", component: ProfileCreatePageComponent },
  { path: "product", component: ProductPageComponent },
  { path: "cart", component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
