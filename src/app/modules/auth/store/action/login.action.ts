import { createAction, props } from "@ngrx/store";
import { IAuth } from "../../types/auth.interface";
import { ActionTypes } from "../actionTypes"

export const actionLogin=createAction(
    ActionTypes.Auth__Login,
    props<{pams:IAuth[]}>()
)
export const actionLoginSuccess=createAction(
    ActionTypes.Auth_Login__success,
    props<{answer:IAuth[]}>()
)
export const actionLoginFailure=createAction(
    ActionTypes.Auth_Login__failure,
    props<{err:Error}>()
)