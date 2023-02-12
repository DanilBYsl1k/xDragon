import { createAction, props } from "@ngrx/store";
import { Iauth } from "app/auth/types/auth.interface";
import { ActionTypes } from "../actionTypes"

export const actionLogin=createAction(
    ActionTypes.Auth,
    props<{pams:Iauth[]}>()
)
export const actionLoginSuccess=createAction(
    ActionTypes.Auth_success,
    props<{answer:Iauth[]}>()
)
export const actionLoginFailure=createAction(
    ActionTypes.Auth_failure,
    props<{err:Error}>()
)