import styled, { css } from 'styled-components'

type Props = {
  width?: number
}

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  @media screen and (min-width: 769px) {
    justify-content: space-between;
    flex-direction: row;
  }
`
export const CategoryTitle = styled.h2`
  font-size: 3.5rem;
  margin: 1rem 0 4rem;
`

export const DescriptionText = styled.p<Props>`
  font-size: 1.8rem;
  font-weight: 600;
  ${({ width }) => css`
    max-width: ${width + 'rem' ?? '100%'};
  `}
`
