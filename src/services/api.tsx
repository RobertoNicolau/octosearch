import { ISearchRequest } from '../interfaces/ISearchRequest'
import { ISearchResponse } from '../interfaces/ISearchResponse'
import { api } from '../libs/axios'

export async function searchRepositories(data: ISearchRequest) {
  const res = await api.get<ISearchResponse>(`/search/repositories`, {
    params: {
      q: data.q,
      page: data.page || 1,
      per_page: 20,
    },
  })

  return res.data
}
