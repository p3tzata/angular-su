import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment'
const apiUrl=environment.apiUrl;
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'

@Injectable()
export class UrlAppandInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let urlString=request.url;
    if (request.url.startsWith("wsh-task")) {
      
      urlString=`${apiUrl}/${request.url}`

    }


    return next.handle(request.clone(
      { 
        url: urlString, 
      }
    )).pipe(tap(x => console.log("Wsh-task: urlAppendInterceptor")));
    //));
  }
}
