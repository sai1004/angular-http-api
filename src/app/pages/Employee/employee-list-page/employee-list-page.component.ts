import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/shared/services/rest-api.service";

@Component({
  selector: "app-employee-list-page",
  templateUrl: "./employee-list-page.component.html",
  styleUrls: ["./employee-list-page.component.css"]
})
export class EmployeeListPageComponent implements OnInit {
  employee: any = [];

  constructor(public _restApi: RestApiService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    return this._restApi.getEmployees().subscribe((data: any) => {
      if (data) {
        this.employee = data;
      }
    });
  }

  deleteEmployee(id: any) {
    if (window.confirm("Are Sure You Want To Delete?")) {
      this._restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees();
      });
    }
  }
}
