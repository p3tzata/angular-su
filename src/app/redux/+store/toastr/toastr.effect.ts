import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";

import {ToastrService} from 'ngx-toastr'

import { map } from "rxjs/operators";
import {showFail,showSuccess} from './toastr.action'

@Injectable()
export class ToastrEffect {

    showSuccessEffect = createEffect(()=>this.action$.pipe(ofType(showSuccess),
    map( (action) => {
      
        this.toastrSrv.success(action.message,action.title);
        
    })),{dispatch:false});

    
    showFailEffect = createEffect(()=>this.action$.pipe(ofType(showFail),
    map( (action) => {
        
        this.toastrSrv.error(action.message,action.title);
        
    })),{ dispatch: false });



    constructor(private action$:Actions,private toastrSrv: ToastrService){
        action$.subscribe(console.log);
    }


    


}


