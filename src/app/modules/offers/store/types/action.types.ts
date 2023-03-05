import { IFilter } from "./filter.types";

export interface IofferInitialState {
	offers: any[],
	filters: IFilter[]
}

export enum FilterTypes{
	Add_Filter = "[FILTER] Adding",
	Remove_Filter = "[FILTER] Removing",
	Get_Filter_List = "[FILTER] Getting"
}