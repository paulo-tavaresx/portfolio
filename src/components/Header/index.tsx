import * as Styled from './styles'
import { CgMenu } from 'react-icons/cg'

export const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.LogoText>Paulo</Styled.LogoText>
      <CgMenu size="3rem" />
    </Styled.HeaderContainer>
  )
}
