import { MouseEventHandler } from 'react'
import * as Styled from './styles'

type Props = {
  isOpen: boolean
  onClick: MouseEventHandler
}

export const IconMobile = ({ isOpen, onClick }: Props) => {
  return (
    <Styled.MenuIcon>
      <Styled.Line onClick={onClick} isOpen={isOpen}></Styled.Line>
    </Styled.MenuIcon>
  )
}
