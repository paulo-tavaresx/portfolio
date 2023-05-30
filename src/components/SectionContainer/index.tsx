import * as Styled from './styles'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  id: string
}

export const SectionContainer = ({ children, id }: Props) => {
  return <Styled.SectionContainer id={id}>{children}</Styled.SectionContainer>
}

export const SectionContainerSecondaryColor = ({ children, id }: Props) => {
  return (
    <Styled.SectionContainerSecondaryColor id={id}>
      {children}
    </Styled.SectionContainerSecondaryColor>
  )
}
