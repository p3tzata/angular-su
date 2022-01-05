import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr'

@Injectable()
export class ResponseHendlerInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

 
    
    if (request.url.startsWith("wsh-task")) {
     
      //return next.handle(request).pipe(tap(x=>console.log("Wsh-task: response hendler")));
      return next.handle(request).pipe(tap( (success) => {
        if (success instanceof HttpResponse) {
            if (success.url?.endsWith('create')
                || success.url?.endsWith('login')
                || success.url?.endsWith('register') ) {
        console.log(success)
        this.toastr.success('Success', "Success title")
        }}
      }),catchError((err)=>{
        console.log(err)
        this.toastr.error(err.message)
        throw err;
      }  )  );
    
    } else {
      
      return next.handle(request);

    }
  
  }
}
