import { createReducer, on } from "@ngrx/store";
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
		(state, payload) => ({
			...state,
			////
		})
	),
	on(
		actionRemoveFilter,
		(state, payload) => ({
			...state,
			///
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