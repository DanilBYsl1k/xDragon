import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AuthService } from "app/auth/service/auth.service";
import { catchError, map, of, switchMap } from "rxjs";
import { actionRegister, actionRegisterSuccess, actionRegisterFailure } from "../action/register.action";

@Injectable({
    providedIn: 'root'
})
export class RegisterEffect{
    constructor(private actions$:Actions, private authService:AuthService){}
    login$=createEffect(()=>this.actions$.pipe(
        ofType(actionRegister),
        switchMap((formValue)=>{
            return this.authService.register(formValue.pams).pipe(map((user)=>{
                return actionRegisterSuccess({answer:user})
            }))
        }),
        catchError((err:HttpErrorResponse)=>{
            return of(actionRegisterFailure({err:err}))
        })
    ))
}