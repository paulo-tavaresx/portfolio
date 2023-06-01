import { iRepos } from '../types/iRepos'

const futuroDotEnvVar = 'https://api.github.com/users/paulo-tavaresx/repos'

export const getApiGitData = async (): Promise<iRepos[]> => {
  const response = await fetch(futuroDotEnvVar)
  const data = await response.json()
  return data
}
