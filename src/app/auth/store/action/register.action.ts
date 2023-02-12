import { createAction, props } from "@ngrx/store";
import { Iauth } from "app/auth/types/auth.interface";
import { ActionTypes } from "../actionTypes"

export const actionRegister=createAction(
    ActionTypes.Auth__Register,
    props<{pams:Iauth[]}>()
)
export const actionRegisterSuccess=createAction(
    ActionTypes.Auth_Register__success,
    props<{answer:Iauth[]}>()
)
export const actionRegisterFailure=createAction(
    ActionTypes.Auth_Register__failure,
    props<{err:Error}>()
)