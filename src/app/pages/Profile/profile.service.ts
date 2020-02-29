import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Profile } from "../../../app/entities/Profile";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private api_Url = "";

  constructor(private _http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getProfiles(): Observable<Profile> {
    return this._http
      .get<Profile>(this.api_Url + "/test.json")
      .pipe(retry(1), catchError(this.handleError));
  }

  getProfile(id): Observable<Profile> {
    return this._http
      .get<Profile>(this.api_Url + "/profiles/" + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  createProfile(profile): Observable<Profile> {
    return this._http
      .post<Profile>(
        this.api_Url + "/profile",
        JSON.stringify(profile),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateProfile(id, Profile): Observable<Profile> {
    return this._http
      .put<Profile>(
        this.api_Url + "/Profile/" + id,
        JSON.stringify(Profile),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteProfile(id) {
    return this._http
      .delete<Profile>(this.api_Url + "/profiles/" + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
}
