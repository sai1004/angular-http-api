import { Component, OnInit } from "@angular/core";
import { Profile } from "../../../entities/Profile";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig
} from "@angular/material/dialog";
import { ProfileCreatePageComponent } from "../profile-create-page/profile-create-page.component";
@Component({
  selector: "app-profile-view-page",
  templateUrl: "./profile-view-page.component.html",
  styleUrls: ["./profile-view-page.component.css"]
})
export class ProfileViewPageComponent implements OnInit {
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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.position = {
    //   top: "",
    //   left: "40"
    // };

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      profile: this.profile
    };

    this.dialog.open(ProfileCreatePageComponent, dialogConfig);

    const dialogRef = this.dialog.open(
      ProfileCreatePageComponent,
      dialogConfig
    );

    dialogRef
      .afterClosed()
      .subscribe(data => console.log("Dialog output:", data)
      
      // this.profile = data
      );
  }
}
