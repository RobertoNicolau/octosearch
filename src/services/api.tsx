import { ISearchRequest } from '../interfaces/ISearchRequest'
import { ISearchResponse } from '../interfaces/ISearchResponse'
import { api } from '../libs/axios'

export function searchRepositories(data: ISearchRequest) {
  return api
    .get<ISearchResponse>(`/search/repositories`, {
      params: {
        q: data.q,
        page: data.page || 1,
        per_page: 20,
      },
    })
    .then((res) => res.data)
}
