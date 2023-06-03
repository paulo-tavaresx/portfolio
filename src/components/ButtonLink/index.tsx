import { ReactNode } from 'react'
import * as Styled from './styles'

type Props = {
  radius?: number
  width?: number
  ratio?: string
  target?: string
  children: ReactNode
  link: string
}
export const ButtonLink = ({
  radius,
  width,
  ratio,
  children,
  target,
  link
}: Props) => {
  return (
    <Styled.ButtonLink
      href={link}
      target={target}
      radius={radius}
      width={width}
      ratio={ratio}
    >
      {children}
    </Styled.ButtonLink>
  )
}
