import { createAction, props } from "@ngrx/store";
import { Iauth } from "app/auth/types/auth.interface";
import { ActionTypes } from "../actionTypes"

export const actionRegister=createAction(
    ActionTypes.Auth,
    props<{pams:Iauth[]}>()
)
export const actionRegisterSuccess=createAction(
    ActionTypes.Auth_success,
    props<{answer:Iauth[]}>()
)
export const actionRegisterFailure=createAction(
    ActionTypes.Auth_failure,
    props<{err:Error}>()
)