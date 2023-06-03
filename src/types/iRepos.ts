export interface iRepos {
  name: string
  html_url: string
  description: string | null
  homepage: string | null
  updated_at: Date
  topics: string[]
  message?: string
}
