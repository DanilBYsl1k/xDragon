import { Iauth } from "./auth.interface";

export interface authInitialState{
    user:Iauth[]
    error:Error|null
}