import { Imagem } from '../Imagem'
import { SectionContainerSecondaryColor } from '../SectionContainer'
import * as Styled from './styles'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { ContainerFlex } from '../ContainerFlex'

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
            <BsGithub size="4rem" title="Github" />
            <BsLinkedin size="4rem" title="Linkedin" />
          </Styled.ContainerFlex>
        </Styled.ContainerFlexColumn>
        <Imagem src="/robot-icon-vector-16.jpg" />
      </ContainerFlex>
    </SectionContainerSecondaryColor>
  )
}
