import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {first, flatMap, mergeMap, switchMap, tap} from 'rxjs/operators'
import { Store } from '@ngrx/store';
import { userTokenSelector } from '../+store/user/user.selector';
import { IUserModuleState } from '../+store';


@Injectable()
export class JwtStoreInterceptor implements HttpInterceptor {

  constructor(private store: Store<{userModule: IUserModuleState}>) {
    console.log('redux: JwtStoreInterceptor')
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

   return  this.store.select(userTokenSelector).pipe(
      first(), //Explain: we use first() thus when emitt one value then complite.
      mergeMap((userToken) =>{
        console.log('redux Auth Token',userToken)
        let cloneHeaders=request.headers;
        
        if (request.url.startsWith("fakeDisable")) {
          
          //const token = this.authService.getToken();
          const token=userToken;
          cloneHeaders = cloneHeaders.set("Authorization",`Bearer ${token}`).set("Custom-app","test")
          
        }
    
        return next.handle(request.clone(
          {
            headers: cloneHeaders
          }
          )).pipe(tap(x => console.log("redux: tap jwtStoreInterceptor request handle",'Auth Token',userToken)));

      })

    );
    

   
  }
}
