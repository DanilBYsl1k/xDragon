import { Action, createReducer, on } from "@ngrx/store";
import { authInitialState } from "../types/authInitialState.interface";
import { actionRegister, actionRegisterFailur, actionRegisterSuccess } from "./action/auth.action";


const initialState:authInitialState={
    user: [],
    error: null
}

const authReducer=createReducer(
    initialState,
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
        actionRegisterFailur,
        (state, action)=>({
            ...state,
            error:action.err
        })
    )
)


export function reducersAuth(state:authInitialState, action:Action){
    return authReducer(state, action)
}