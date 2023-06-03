import styled from 'styled-components'

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;

  @media screen and (min-width: 769px) {
    &:hover {
      transform: scale(1.1);
    }
    transition: 0.2s ease-in-out;
  }
`
