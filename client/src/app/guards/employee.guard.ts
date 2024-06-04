import { ResolveFn } from '@angular/router';
import {TestService} from "../test.service";
import {inject} from "@angular/core";
import {catchError, map, Observable, of, throwError} from "rxjs";

export const employeeResolver: ResolveFn<Object> = (route, state) => {
  console.log(route);
  return inject(TestService).getEmployees().pipe(
    map((data) => ({data, error: ''})),
    catchError(error => {
      return of({data: '', error});
      }
    )
  );
};
