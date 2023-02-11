import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authInitialState } from "../types/authInitialState.interface";

export const FeatureSelector=createFeatureSelector<authInitialState>('auth')

export const userSelector=createSelector(
    FeatureSelector,
    (state)=>state.user
)
export const errorSelector=createSelector(
    FeatureSelector,
    (state)=>state.error
)