import styled, { css } from 'styled-components'

type Props = {
  className: string
  width?: number
}

type iconType = {
  width?: number
}

const IconTag = styled.i<iconType>`
  ${({ width }) => css`
    font-size: ${width ?? 4}rem;
  `}
  color: black;
`

export const Icon = ({ className, width }: Props) => {
  return <IconTag width={width} className={className}></IconTag>
}
