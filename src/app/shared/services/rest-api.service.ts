import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Employee } from "../../../app/entities/Employee";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RestApiService {
  private api_Url = "http://0.0.0.0:4545";

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

  getEmployees(): Observable<Employee> {
    return this._http
      .get<Employee>(this.api_Url + "/employees")
      .pipe(retry(1), catchError(this.handleError));
  }

  getEmployee(id): Observable<Employee> {
    return this._http
      .get<Employee>(this.api_Url + "/employees/" + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  createEmployee(employee): Observable<Employee> {
    return this._http
      .post<Employee>(
        this.api_Url + "/employees",
        JSON.stringify(employee),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateEmployee(id, employee): Observable<Employee> {
    return this._http
      .put<Employee>(
        this.api_Url + "/employees/" + id,
        JSON.stringify(employee),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteEmployee(id) {
    return this._http
      .delete<Employee>(this.api_Url + "/employees/" + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
}
