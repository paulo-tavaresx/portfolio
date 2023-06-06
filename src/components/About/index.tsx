import { CategoryTitle } from '../CategoryTitle'
import { Imagem } from '../Imagem'
import { SectionContainer } from '../SectionContainer'
import * as Styled from './styles'

type Props = {
  id: string
}

export const About = ({ id }: Props) => {
  return (
    <SectionContainer id={id}>
      <CategoryTitle top={3.8} bottom={3.5}>
        Sobre mim
      </CategoryTitle>
      <Styled.ContainerFlex>
        <Imagem
          width={40}
          ratio="3/2"
          radius="1.5"
          src="/aboutImagem.webp"
          alt="imagem de uma mão com uma caneta, encima de um teclado de um notebook e alguns códigos html."
        />
        <Styled.DescriptionText width={55}>
          Olá, meu nome é Paulo, Sou um desenvolvedor front-end em constante
          busca por conhecimento e aprimoramento, pois acredito que esses são os
          pilares para me destacar nessa área em constante evolução. Estou
          dedicando meu tempo e energia para me tornar um desenvolvedor
          full-stack, e estou animado com as oportunidades que essa carreira
          oferece.
        </Styled.DescriptionText>
      </Styled.ContainerFlex>
    </SectionContainer>
  )
}
