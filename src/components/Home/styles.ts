import styled from 'styled-components'

export const ContainerFlexColumn = styled.div`
  padding: 6rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media screen and (min-width: 769px) {
    padding: 11.5rem 0 8.5rem;
  }
`

export const ContainerFlex = styled.div`
  display: flex;
  gap: 2rem;
`

export const TextMain = styled.h1`
  font-size: 4.5rem;
`
export const TextSecondary = styled.h2`
  font-size: 3rem;
`

export const TextEmphasis = styled.strong`
  color: var(--secondary-color);
  display: block;
`
