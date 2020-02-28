import { Component, OnInit, Inject } from "@angular/core";
import { Profile } from "src/app/entities/Profile";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-profile-create-page",
  templateUrl: "./profile-create-page.component.html",
  styleUrls: ["./profile-create-page.component.css"]
})
export class ProfileCreatePageComponent implements OnInit {
  profile: Profile;

  constructor(
    private dialogRef: MatDialogRef<ProfileCreatePageComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.profile = data.profile;
  }

  ngOnInit(): void {}

  save(profileForm: any) {
    this.dialogRef.close(profileForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}

// https://gist.github.com/jhades/a3770850f74893670f4610b6db655733#file-08-ts