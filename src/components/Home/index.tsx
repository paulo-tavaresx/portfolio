import { Imagem } from '../Imagem'
import { SectionContainer } from '../SectionContainer'
import * as Styled from './styles'
import { ContainerFlex } from '../ContainerFlex'
import { Icon } from '../icon'
import { IconLink } from '../IconLink'

type Props = {
  id: string
}

export const Home = ({ id }: Props) => {
  return (
    <SectionContainer id={id}>
      <ContainerFlex>
        <Styled.ContainerFlexColumn>
          <Styled.TextMain>
            Olá, meu nome é
            <Styled.TextEmphasis>Paulo Tavares</Styled.TextEmphasis>
          </Styled.TextMain>
          <Styled.TextSecondary>Desenvolvedor front-end</Styled.TextSecondary>
          <Styled.ContainerFlex>
            <IconLink
              className="devicon-linkedin-plain"
              link="https://www.linkedin.com/in/paulo-tavaresx/"
              target="_blank"
            />
            <IconLink
              className="devicon-github-original colored"
              link="https://github.com/paulo-tavaresx"
              target="_blank"
            />
          </Styled.ContainerFlex>
        </Styled.ContainerFlexColumn>
        <Imagem src="/robot-icon-vector-16.jpg" />
      </ContainerFlex>
    </SectionContainer>
  )
}
