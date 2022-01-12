import { Injectable } from '@angular/core';

//Explain this is the best solution in most of cases.
//However, since Angular 6.0, the best practice for providing services is with the @Injectable() providedIn property.
//https://angular.io/guide/singleton-services
@Injectable({
  providedIn: 'root'
})
export class SomeDBService {

  constructor() { }
}
