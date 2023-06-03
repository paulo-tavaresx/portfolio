import { MouseEventHandler } from 'react'
import { listNavLinks } from '../../utils/listNavLinks'
import { Anchor } from '../Anchor'
import { NavItem } from '../NavItem'
import * as Styled from './styles'

type Props = {
  isOpen: boolean
  onClick: MouseEventHandler
}

export const NavLinks = ({ isOpen, onClick }: Props) => {
  return (
    <Styled.NavLinks isOpen={isOpen}>
      {listNavLinks.map(({ sectionName, link }, index) => (
        <NavItem key={index}>
          <Anchor onClick={onClick} link={link}>
            {sectionName}
          </Anchor>
        </NavItem>
      ))}
    </Styled.NavLinks>
  )
}
