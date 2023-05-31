import * as Styled from './styles'

type Props = {}

export const Footer = ({}: Props) => {
  return (
    <Styled.FooterContainer>
      <Styled.Text>Copyright &copy; 2023 </Styled.Text>
      <Styled.Text>
        Feito por{' '}
        <a href="https://github.com/paulo-tavaresx" target="_blank">
          Paulo Tavares
        </a>
      </Styled.Text>
    </Styled.FooterContainer>
  )
}
