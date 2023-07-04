import { IItemsResponse } from './IItemsResponse'

export interface ISearchResponse {
  total_count: number
  items: IItemsResponse[]
}
