import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 4rem max(calc((100% - 120rem) / 2), 3rem);
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: var(--header-color);
  @media screen and (min-width: 769px) {
    padding: 2rem max(calc((100% - 120rem) / 2), 5rem);
  }
`

export const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`
