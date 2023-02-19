import { createAction, props } from "@ngrx/store";
import { IAuth } from "../../types/auth.interface";
import { ActionTypes } from "../actionTypes"

export const actionRegister=createAction(
    ActionTypes.Auth__Register,
    props<{pams:IAuth[]}>()
)
export const actionRegisterSuccess=createAction(
    ActionTypes.Auth_Register__success,
    props<{answer:IAuth[]}>()
)
export const actionRegisterFailure=createAction(
    ActionTypes.Auth_Register__failure,
    props<{err:Error}>()
)