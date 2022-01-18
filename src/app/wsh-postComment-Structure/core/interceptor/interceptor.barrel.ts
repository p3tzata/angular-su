import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./jwt.interceptor";
import { UrlAppandInterceptor } from "./url-appand.interceptor";
//import {ResponseHendlerInterceptor} from './response-hendler.interceptor'

//Explain: we use this barrel to merge all interceptors, thus we don't need to modify app.module about future created interceptors. 
export const wshPostComentStrcInterceptorProviders = [
  
//  { provide: HTTP_INTERCEPTORS, useClass: ResponseHendlerInterceptor, multi: true }, 
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: UrlAppandInterceptor, multi: true },
   
    
  ];