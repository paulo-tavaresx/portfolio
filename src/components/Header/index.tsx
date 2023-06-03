import { useState } from 'react'
import { NavLinks } from '../NavLinks'
import * as Styled from './styles'
import { IconMobile } from '../IconMobile'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleShowMenu = () => {
    setIsOpen(!isOpen)
  }
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }
  return (
    <Styled.HeaderContainer>
      <Styled.LogoText>Paulo</Styled.LogoText>
      <NavLinks onClick={handleClick} isOpen={isOpen} />
      <IconMobile isOpen={isOpen} onClick={handleShowMenu} />
    </Styled.HeaderContainer>
  )
}
