import { Injectable } from '@angular/core';
import {Observable, catchError, throwError, Subject, BehaviorSubject} from "rxjs";
import {IEmployee} from '../interface/user-style'
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class TestService {
  readonly URL = 'https://jsonplaceholder.typicode.com/users';
  public subject = new BehaviorSubject<any>('Susheel');
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.URL)
      .pipe(catchError(this.errorHandler))
  }

  addEmployee(employeeName: string) {
    this.subject.next(employeeName);
  }

  errorHandler(httpError: HttpErrorResponse): Observable<any> {
    return throwError(() => new Error(httpError.message))
  }
}
