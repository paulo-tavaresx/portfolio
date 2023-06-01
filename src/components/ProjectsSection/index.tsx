import * as Styled from './styles'
import { SectionContainer } from '../SectionContainer'
import { useEffect, useState } from 'react'
import { iRepos } from '../../types/iRepos'
import { getApiGitData } from '../../utils/getApiData'
import { ProjectCard } from '../ProjectCard'
import { CategoryTitle } from '../CategoryTitle'
import { apitDataMockup } from '../../utils/apiDataMockup'

type Props = {
  id: string
}

export const ProjectsSections = ({ id }: Props) => {
  const [reposData, setReposData] = useState<iRepos[] | []>([])

  useEffect(() => {
    // getApiGitData().then(response => setReposData(response))
    setReposData(apitDataMockup)
  }, [])
  return (
    <SectionContainer id={id}>
      <CategoryTitle bottom={3.5} align="center">
        Projetos
      </CategoryTitle>
      <Styled.projectsContainer>
        {reposData.map(({ name, homepage }, index) => (
          <ProjectCard
            projectPreview={`${homepage}/preview.png`}
            key={index}
            projectName={name}
            projectRepository={homepage}
          />
        ))}
      </Styled.projectsContainer>
    </SectionContainer>
  )
}
