export interface iRepos {
  name: string
  html_url: string | null
  description: string | null
  homepage: string
  updated_at: Date
  topics: string[]
  message?: string
}
