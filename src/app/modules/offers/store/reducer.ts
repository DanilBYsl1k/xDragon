import { Action, createReducer, on } from "@ngrx/store";
import { actionAddFilter, actionGetFilterList, actionRemoveFilter } from "./action/filter.action";
import { IofferInitialState } from "./types/action.types";

const initialState: IofferInitialState = {
	offers: [],
	filters: []
}

const offersReducer = createReducer(
	initialState,
	on(
		actionAddFilter,
		(state, action) => ({
			...state,
			filters: [...state.filters, action.tag]
		})
	),
	on(
		actionRemoveFilter,
		(state, action) => ({
			...state,
			filters: state.filters.splice(action.id, 1)
		})
	),
	on(
		actionGetFilterList,
		(state) => ({
			...state
			///
		})
	)
)

export function reducersOffers(state: IofferInitialState, action: Action){
	return offersReducer(state, action)
}