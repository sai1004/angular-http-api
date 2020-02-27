import { Component, OnInit } from "@angular/core";
import { Profile } from "../../../entities/Profile";
import { from } from "rxjs";
@Component({
  selector: "app-profile-view-page",
  templateUrl: "./profile-view-page.component.html",
  styleUrls: ["./profile-view-page.component.css"]
})
export class ProfileViewPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  profile: Profile[] = [
    {
      id: "1",
      name: "john",
      email: "john@email.com",
      mobile: 123456789,
      password: "secret",
      dob: "01-02-2000"
    },
    {
      id: "2",
      name: "chirs",
      email: "chris@email.com",
      mobile: 123456789,
      password: "secret",
      dob: "01-02-2000"
    },
    {
      id: "3",
      name: "Simon",
      email: "simon@email.com",
      mobile: 123456789,
      password: "secret",
      dob: "01-02-2000"
    }
  ];

  displayedColumns: string[] = ["id", "name", "email", "mobile"];
}
