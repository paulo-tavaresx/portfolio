import { ButtonLink } from '../ButtonLink'
import { Imagem } from '../Imagem'
import { Icon } from '../icon'
import * as Styled from './styles'

type Props = {
  projectName: string
  projectPreview: string
  projectRepository: string
}

export const ProjectCard = ({
  projectName,
  projectPreview,
  projectRepository
}: Props) => {
  return (
    <Styled.ProjectCard>
      <Imagem
        src={'/aboutimage.jpg'}
        width={40}
        ratio="2/1.5"
        alt={`Project ${projectName} Image Preview ${projectPreview} `}
        radius="1.5"
      />
      <Styled.Container>
        <Styled.ProjectName>{projectName}</Styled.ProjectName>
        <Styled.ProjectDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </Styled.ProjectDescription>
        <Styled.ContentContainer>
          <ButtonLink
            radius={1}
            target="_blank"
            projectRepository={projectRepository}
          >
            Repositorio{' '}
            <Icon width={2} className="devicon-github-original colored"></Icon>
          </ButtonLink>
          <ButtonLink
            radius={1}
            target="_blank"
            projectRepository={projectRepository}
          >
            Ver Projeto{' '}
          </ButtonLink>
        </Styled.ContentContainer>
      </Styled.Container>
    </Styled.ProjectCard>
  )
}
