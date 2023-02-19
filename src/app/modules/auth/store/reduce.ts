import { Action, createReducer, on } from "@ngrx/store";
import { authInitialState } from "../types/authInitialState.interface";
import { actionLogin, actionLoginSuccess, actionLoginFailure } from "./action/login.action";
import { actionRegister, actionRegisterFailure, actionRegisterSuccess } from "./action/register.action";


const initialState:authInitialState={
    user: [],
    error: null
}

const authReducer=createReducer(
    initialState,
    on(
        actionLogin,
        (state)=>({
            ...state,
            user:[]
        })
    ),
    on(
        actionLoginSuccess,
        (state, action)=>({
            ...state,
            user:action.answer
        })
    ),
    on(
        actionLoginFailure,
        (state, action)=>({
            ...state,
            error:action.err
        })
    ),
    on(
        actionRegister,
        (state)=>({
            ...state,
            user:[]
        })
    ),
    on(
        actionRegisterSuccess,
        (state, action)=>({
            ...state,
            user:action.answer
        })
    ),
    on(
        actionRegisterFailure,
        (state, action)=>({
            ...state,
            error:action.err
        })
    )
)


export function reducersAuth(state:authInitialState, action:Action){
    return authReducer(state, action)
}