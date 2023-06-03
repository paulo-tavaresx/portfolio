import * as Styled from './styles'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const NavItem = ({ children }: Props) => {
  return <Styled.NavItem>{children}</Styled.NavItem>
}
