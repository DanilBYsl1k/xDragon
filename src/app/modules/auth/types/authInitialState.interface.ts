import { IAuth } from "./auth.interface";

export interface authInitialState{
    user:IAuth[]
    error:Error|null
}