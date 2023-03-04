export interface IFilter {
	title: string, 
	tags: string[]
}

export interface IFilterList {
	[index: number]: IFilter
}