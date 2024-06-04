import {HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {map} from "rxjs";

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const headerReq = req.clone(
    {
      setHeaders: {
        API_KEY: 'test'
      }
    }
  )
  return next(headerReq).pipe(
    map(event => {
      if (event instanceof HttpResponse) {
        event = event.clone({ body: resolveReferences(event.body) })
      }
      return event;
    })
  );
};

const resolveReferences = (data: any) => {
  return data.map((item:any) => {
    return {...item, age: 23}
  });
}
