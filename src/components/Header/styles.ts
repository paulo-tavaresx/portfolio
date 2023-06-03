import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 2rem max(calc((100% - 120rem) / 2), 3rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: inherit;
  background-color: var(--secondary-color);
  @media screen and (min-width: 769px) {
    padding: 2rem max(calc((100% - 120rem) / 2), 5rem);
  }
`
export const LogoText = styled.h1`
  font-size: 3.5rem;
  color: inherit;
`
