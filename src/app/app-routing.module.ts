import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListPageComponent } from './pages/employee-list-page/employee-list-page.component';


const routes: Routes = [{path:"emp-list", component: EmployeeListPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
