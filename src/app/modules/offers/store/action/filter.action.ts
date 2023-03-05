import { createAction, props } from "@ngrx/store";
import { FilterTypes } from "../types/filter.types";

export const actionAddFilter = createAction(
	FilterTypes.Add_Filter,
	props<{tag: string}>()
)

export const actionRemoveFilter = createAction(
	FilterTypes.Remove_Filter,
	props<{id: number}>()
)

export const actionGetFilterList = createAction(
	FilterTypes.Get_Filter_List,
)