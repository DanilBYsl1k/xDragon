import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AuthService } from "../../service/auth.service";
import { catchError, map, of, switchMap } from "rxjs";
import { actionRegister, actionRegisterSuccess, actionRegisterFailure } from "../action/register.action";
import { ToastrService } from 'ngx-toastr';
@Injectable({
    providedIn: 'root'
})
export class RegisterEffect{
    constructor(private actions$:Actions, private authService:AuthService, private toastr: ToastrService){}
    login$=createEffect(()=>this.actions$.pipe(
        ofType(actionRegister),
        switchMap((formValue)=>{
            if (formValue) {
                this.toastr.success('You have been successfully registered')
            }
            return this.authService.register(formValue.pams).pipe(map((user)=>{
                return actionRegisterSuccess({answer:user})
            }))
        }),
        catchError((err:HttpErrorResponse)=>{
            this.toastr.error(err.message)
            return of(actionRegisterFailure({err:err}))
        })
    ))
}