import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AuthService } from "../../service/auth.service";
import { catchError, map, of, switchMap } from "rxjs";
import { actionLogin, actionLoginSuccess, actionLoginFailure } from "../action/login.action";

@Injectable({
    providedIn: 'root'
})
export class LoginEffect{
    constructor(private actions$:Actions, private authService:AuthService){}
    login$=createEffect(()=>this.actions$.pipe(
        ofType(actionLogin),
        switchMap((formValue)=>{
            return this.authService.login(formValue.pams).pipe(map((user)=>{
                return actionLoginSuccess({answer:user})
            }))
        }),
        catchError((err:HttpErrorResponse)=>{
            return of(actionLoginFailure({err:err}))
        })
    ))
}