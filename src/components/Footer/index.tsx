import { Anchor } from '../Anchor'
import * as Styled from './styles'

type Props = {}

export const Footer = ({}: Props) => {
  return (
    <Styled.FooterContainer>
      <Styled.Text>Copyright &copy; 2023 </Styled.Text>
      <Styled.Text>
        Feito por{' '}
        <Anchor link="https://github.com/paulo-tavaresx" target="_blank">
          Paulo Tavares
        </Anchor>
      </Styled.Text>
    </Styled.FooterContainer>
  )
}
