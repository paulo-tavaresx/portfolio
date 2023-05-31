import { Imagem } from '../Imagem'
import { SectionContainerSecondaryColor } from '../SectionContainer'
import * as Styled from './styles'
import { ContainerFlex } from '../ContainerFlex'
import { Icon } from '../icon'

type Props = {
  id: string
}

export const Home = ({ id }: Props) => {
  return (
    <SectionContainerSecondaryColor id={id}>
      <ContainerFlex>
        <Styled.ContainerFlexColumn>
          <Styled.TextMain>
            Olá, meu nome é
            <Styled.TextEmphasis>Paulo Tavares</Styled.TextEmphasis>
          </Styled.TextMain>
          <Styled.TextSecondary>Desenvolvedor front-end</Styled.TextSecondary>
          <Styled.ContainerFlex>
            <Icon className="devicon-linkedin-plain"></Icon>
            <Icon className="devicon-github-original colored"></Icon>
          </Styled.ContainerFlex>
        </Styled.ContainerFlexColumn>
        <Imagem src="/robot-icon-vector-16.jpg" />
      </ContainerFlex>
    </SectionContainerSecondaryColor>
  )
}
