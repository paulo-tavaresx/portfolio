import styled from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 8rem max(calc((100% - 120rem) / 2), 3rem);
  background: var(--main-color);
  @media screen and (min-width: 769px) {
    padding: 8rem max(calc((100% - 120rem) / 2), 5rem);
  }
`
