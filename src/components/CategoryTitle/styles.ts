import styled, { css } from 'styled-components'

type typeCategoryTitle = {
  align?: string
  top?: number
  bottom?: number
}

export const CategoryTitle = styled.h2<typeCategoryTitle>`
  font-size: 3.5rem;

  ${({ align, top, bottom }) => css`
    text-align: ${align ?? 'start'};
    margin-top: ${top ?? 0}rem;
    margin-bottom: ${bottom ?? 0}rem;
  `}
`
