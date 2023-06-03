import { ButtonLink } from '../ButtonLink'
import { Imagem } from '../Imagem'
import { Icon } from '../icon'
import { techIcons } from '../../utils/techsIcons'
import * as Styled from './styles'

type Props = {
  projectName: string
  projectPreview: string
  projectRepository: string
  projectPage: string | null
  techsName: [keyof typeof techIcons]
  projectDescription: string | null
}

export const ProjectCard = ({
  projectName,
  projectPreview,
  projectRepository,
  projectPage,
  techsName,
  projectDescription
}: Props) => {
  return (
    <Styled.ProjectCard>
      <Imagem
        src={'/aboutImagem.webp'}
        width={40}
        ratio="2/1.5"
        alt={`Project ${projectName} Image Preview ${projectPreview} `}
        radius="1.5"
      />
      <Styled.Container>
        <Styled.ProjectName>{projectName}</Styled.ProjectName>

        <Styled.ProjectDescription>
          {projectDescription ?? 'Descrição em breve'}
        </Styled.ProjectDescription>

        <Styled.ContentContainer>
          {techsName.map(key => (
            <Icon width={3} className={techIcons[key]} />
          ))}
        </Styled.ContentContainer>

        <Styled.ContentContainer>
          <ButtonLink radius={1} target="_blank" link={projectRepository}>
            Repositorio{' '}
            <Icon width={2} className="devicon-github-original colored"></Icon>
          </ButtonLink>
          {projectPage && (
            <ButtonLink radius={1} target="_blank" link={projectRepository}>
              Ver Projeto{' '}
            </ButtonLink>
          )}
        </Styled.ContentContainer>
      </Styled.Container>
    </Styled.ProjectCard>
  )
}
