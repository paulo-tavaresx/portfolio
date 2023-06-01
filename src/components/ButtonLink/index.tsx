import { ReactNode } from 'react'
import * as Styled from './styles'

type Props = {
  radius?: number
  width?: number
  ratio?: string
  target?: string
  children: ReactNode
  projectRepository: string
}
export const ButtonLink = ({
  radius,
  width,
  ratio,
  children,
  target,
  projectRepository
}: Props) => {
  return (
    <Styled.ButtonLink
      href={projectRepository}
      target={target}
      radius={radius}
      width={width}
      ratio={ratio}
    >
      {children}
    </Styled.ButtonLink>
  )
}
