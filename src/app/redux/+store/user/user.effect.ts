import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects, ROOT_EFFECTS_INIT } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, takeUntil, tap } from "rxjs/operators";
import {  testEffect ,selectUser, seedPosts, seedPostsCancel, seedPostsSuccess, seedPostsFail, setToken, initAction} from "./user.action";
import {UserService} from '../../service/user.service'
import { showFail, showSuccess } from "../toastr/toastr.action";
import {AuthService} from '../../../wsh-task/service/authentication/auth.service'
import { Action } from "@ngrx/store";
@Injectable()
export class UserEffect implements OnInitEffects{
/**/
    constructor(private action$:Actions, private userSrv:UserService, private authSrv:AuthService) {
        console.log('UserEffect Constructor is created')
        //Explain Map([1,2,3]=>[1,2,3]) vs SwithMap([1,2,3]=>1,2,3)
        of([1,2,3]).pipe(map((x) =>x)).subscribe((console.log));
        of([1,2,3]).pipe(switchMap((x) =>x)).subscribe(console.log);
        of([1,2,3]).pipe(switchMap((x) =>x),map((x)=>x+200)).subscribe(console.log);

    }
    ngrxOnInitEffects(): Action {
        return initAction();
    }

    //Expain - this will prevent of loosing token when refresh window.
    initEffect = createEffect(()=> this.action$.pipe(
        ofType(initAction),
        tap(()=>{console.log('sss')}), //Explain if we call external function or service we have to call them in tap() to be more consistency
        switchMap(() => {
            
            const token=this.authSrv.getToken();
            if (!token) {return []}
            return [setToken({token:token})];
        } ),
       

    )

    );


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
        SwithMap vs MergeMap: if come new request it cancel previous, mergeMap don't do this
        SwithMap vs Map = see constructor above; map return observable
    */

    seedPostsEffect = createEffect( () => this.action$
    .pipe(ofType(seedPosts),
          map(x=>x.fakeParam), //Explain if I want to use props of the Action
          switchMap ( (param) => this.userSrv.getAllPost().pipe(
              takeUntil(this.action$.pipe(ofType(seedPostsCancel))),
              //map((x)=>seedPostsSuccess({postList: x})),
              switchMap((x)=>[showSuccess({title: 'success title',message:"load complited"}),seedPostsSuccess({postList: x}) ]  ),
              catchError(err=> [showFail({title: 'fail title',message: err.message}),seedPostsFail({errorMsg: err})] ) 
              )  )
    
    
    ));


    

}