import * as Styled from './styles'

import { MouseEventHandler, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: MouseEventHandler
  link: string
  target?: string
  hoverEffect?: boolean
}

export const Anchor = ({ children, onClick, link, target }: Props) => {
  return (
    <Styled.Anchor href={link} onClick={onClick} target={target}>
      {children}
    </Styled.Anchor>
  )
}
