import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/shared/services/rest-api.service";
import { Employee } from "src/app/entities/Employee";

@Component({
  selector: "app-employee-list-page",
  templateUrl: "./employee-list-page.component.html",
  styleUrls: ["./employee-list-page.component.css"]
})
export class EmployeeListPageComponent implements OnInit {
  // employee: any = [];

  employee: Employee;

  displayedColumns: string[] = ["id", "name", "salary", "age"];

  constructor(public _restApi: RestApiService) {
    this.employee = new Employee();
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    return this._restApi.getEmployees().subscribe((result: any) => {
      if (result) {
        console.log(result.data);
        this.employee = result.data;
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
