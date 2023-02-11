import { createAction, props } from "@ngrx/store";
import { Iauth } from "app/auth/types/auth.interface";
import { ActionTypes } from "../actionTypes"

export const actionRegister=createAction(
    ActionTypes.Register,
    props<{pams:Iauth[]}>()
)
export const actionRegisterSuccess=createAction(
    ActionTypes.Register_success,
    props<{answer:Iauth[]}>()
)
export const actionRegisterFailur=createAction(
    ActionTypes.Register_failure,
    props<{err:Error}>()
)