import { ReactNode } from 'react'
import * as Styled from './styles'

type Props = {
  align?: string
  children: ReactNode
  top?: number
  bottom?: number
}

export const CategoryTitle = ({ align, children, bottom, top }: Props) => {
  return (
    <Styled.CategoryTitle top={top} bottom={bottom} align={align}>
      {children}
    </Styled.CategoryTitle>
  )
}
