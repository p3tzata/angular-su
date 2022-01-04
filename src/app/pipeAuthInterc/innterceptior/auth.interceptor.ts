import {environment} from '../../../environments/environment'
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap } from 'rxjs/operators';

const apiUrl=environment.apiUrl;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    
    let cloneHeaders=request.headers;
    
    
  
    if (request.url.includes("dashboard")) {
      const token = localStorage.getItem("token");
      cloneHeaders = cloneHeaders.set("Authorization",`Bearer ${token}`).set("Custom-app","test")
     //This not work request.headers.set("Authorization",`Bearer ${token}`).set("Custom-app","test")
    }

    return next.handle(request.clone(
      { url: `${apiUrl}/${request.url}`, 
        headers: cloneHeaders
      }
    //)).pipe(tap(console.log));
    ));
   
   


   //Explain: if we use refresh token we need here to do handlering
   /* 
   return next.handle(request.clone()).pipe(map(
      (event) => {
        if(event instanceof HttpResponse) {
          if (event.status==401) {
            //do some logic to refresh token.
          }
        }
        return event;
      }
    )).pipe(tap(console.log));
     */
  }
}
