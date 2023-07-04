export interface IItemsResponse {
  id: number
  name: string
  description: string
  html_url: string
  created_at: string
  updated_at: string
  stargazers_count: number
  size: number
  forks: number | string
  open_issues: number | string
  watchers: number | string
  owner: {
    avatar_url: string
    login: string
  }
}
