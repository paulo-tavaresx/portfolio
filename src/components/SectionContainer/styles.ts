import styled from 'styled-components'

export const SectionContainer = styled.section`
  padding: 8rem max(calc((100% - 120rem) / 2), 3rem);
  background-color: var(--main-color);
  min-height: calc(100vh);
  @media screen and (min-width: 769px) {
    padding: 9rem max(calc((100% - 120rem) / 2), 5rem);
  }
`

export const SectionContainerSecondaryColor = styled(SectionContainer)`
  background-color: var(--secondary-color);
`
