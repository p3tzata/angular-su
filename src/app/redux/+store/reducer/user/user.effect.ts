import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { catchError, map, switchMap, takeUntil } from "rxjs/operators";
import {  testEffect ,selectUser, seedPosts, seedPostsCancel, seedPostsSuccess, seedPostsFail} from "./user.action";
import {UserService} from '../../../service/user.service'

@Injectable()
export class UserEffect {
/**/
    constructor(private action$:Actions, private userSrv:UserService) {
        //console.log('UserEffect Constructor is created')
    }

    testEffect_ = createEffect( () => this.action$
    .pipe(ofType(testEffect) // this is the same of filter(action => action.type === '[USER] add')
    ,map((action) =>  {
        console.log(action);
        return selectUser({userId: 1 } )} ) //We have to call other action
    ))


    /*Explain: SwitchMap 
        let text = of('Hello guys, Welcome To');  
        let case1 = text.pipe(switchMap((value) => of(value + ' JavaTpoint!')));  
        case1.subscribe((value) => {console.log(value);});  
        Result:
        Hello guys, Welcome To JavaTpoint!
        ===========================
        Benefits: if come new request it cancel previous, 
    */

    seedPostsEffect = createEffect( () => this.action$
    .pipe(ofType(seedPosts),
          switchMap ( () => this.userSrv.getAllPost().pipe(
              takeUntil(this.action$.pipe(ofType(seedPostsCancel))),
              map((x)=>seedPostsSuccess({postList: x})),
              catchError(err=> [seedPostsFail({errorMsg: err})] ) 
              )  )
    
    
    ));


    

}