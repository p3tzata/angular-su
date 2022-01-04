import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let cloneHeaders=request.headers;
    
    if (request.url.startsWith("wsh-task")) {
      
      const token = this.authService.getToken();
      cloneHeaders = cloneHeaders.set("Authorization",`Bearer ${token}`).set("Custom-app","test")
      //This not work request.headers.set("Authorization",`Bearer ${token}`).set("Custom-app","test")
    }

    return next.handle(request.clone(
      {
        headers: cloneHeaders
      }
      )).pipe(tap(x => console.log("Wsh-task: jwtInterceptor")));
    //));
  }
}
