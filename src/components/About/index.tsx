import { Imagem } from '../Imagem'
import { SectionContainer } from '../SectionContainer'
import * as Styled from './styles'

type Props = {
  id: string
}

export const About = ({ id }: Props) => {
  return (
    <SectionContainer id={id}>
      <Styled.CategoryTitle>About me</Styled.CategoryTitle>
      <Styled.ContainerFlex>
        <Imagem width={50} ratio="3/2" src="/aboutimage.jpg" />
        <Styled.DescriptionText width={40} ratio="3/1">
          Olá, me chamo Paulo, Sou um desenvolvedor frontend em constante busca
          por conhecimento e aprimoramento, pois acredito que esses são os
          pilares para me destacar nessa área em constante evolução. Estou
          dedicando meu tempo e energia para me tornar um desenvolvedor
          full-stack, e estou animado com as oportunidades que essa carreira
          oferece.
        </Styled.DescriptionText>
      </Styled.ContainerFlex>
    </SectionContainer>
  )
}
