import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-http-api";

  menus: any[] = [
    {
      name: "Profile",
      link: "profile-view"
    },
    {
      name: "Employee",
      link: "emp-list"
    },
    {
      name: "Todo-App",
      link: "todo"
    }
  ];
}
