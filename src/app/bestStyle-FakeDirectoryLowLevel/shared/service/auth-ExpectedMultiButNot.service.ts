import { Injectable } from '@angular/core';

@Injectable()
export class AuthExpectedMultiButNotService {

  private _randomNo = 0;
  constructor() { 
    console.log('AuthMultiService constructed, exptected multi but not');
    this._randomNo = Math.floor(Math.random() * 1000 + 1);
  }

  get RandomNoInstance() {
    return this._randomNo;
  }
}
