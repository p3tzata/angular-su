import { Injectable } from '@angular/core';

@Injectable()
export class AuthSingletonService {
  private _randomNo = 0;
  constructor() { 
    this._randomNo = Math.floor(Math.random() * 1000 + 1);
  }

  get RandomNoInstance() {
    return this._randomNo;
  }

}
