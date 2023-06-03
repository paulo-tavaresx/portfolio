import * as Styled from './styles'
import { SectionContainer } from '../SectionContainer'
import { useEffect, useState } from 'react'
import { iRepos } from '../../types/iRepos'
// import { getApiGitData } from '../../utils/getApiData'
import { ProjectCard } from '../ProjectCard'
import { CategoryTitle } from '../CategoryTitle'
import { apitDataMockup } from '../../utils/apiDataMockup'
import { techsNamesFilter } from '../../utils/techsFilterFunc'

type Props = {
  id: string
}

export const ProjectsSections = ({ id }: Props) => {
  const [reposData, setReposData] = useState<iRepos[] | []>([])

  useEffect(() => {
    // getApiGitData().then(response => {setReposData(response)})

    setReposData(
      apitDataMockup.filter(({ topics }) => topics.includes('pinned'))
    )
  }, [])
  return (
    <SectionContainer id={id}>
      <CategoryTitle top={2} bottom={3.5} align="center">
        Projetos
      </CategoryTitle>
      <Styled.projectsContainer>
        {reposData.map(
          ({ name, html_url, homepage, topics, description }, index) => (
            <ProjectCard
              projectPreview={`${homepage}/preview.png`}
              key={index}
              projectName={name}
              projectRepository={html_url}
              projectPage={homepage ?? null}
              projectDescription={description ?? null}
              techsName={techsNamesFilter(topics)}
            />
          )
        )}
      </Styled.projectsContainer>
    </SectionContainer>
  )
}
