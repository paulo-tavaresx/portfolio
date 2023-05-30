import styled, { css } from 'styled-components'

type Props = {
  width?: number
  ratio?: string
}

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const CategoryTitle = styled.h2`
  font-size: 3.5rem;
  margin: 1rem 0 4rem;
`

export const DescriptionText = styled.p<Props>`
  font-size: 1.6rem;
  ${({ width, ratio }) => css`
    max-width: ${width + 'rem' ?? '100%'};
    aspect-ratio: ${ratio ?? 1};
  `}
`
