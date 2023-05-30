import { ReactNode } from 'react'
import * as Styled from './styles'

type Props = {
  children: ReactNode
}

export const ContainerFlex = ({ children }: Props) => {
  return <Styled.ContainerFlex>{children}</Styled.ContainerFlex>
}
