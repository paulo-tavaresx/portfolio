import styled from 'styled-components'

export const NavItem = styled.li`
  position: relative;
  transition: 0.5s ease-in-out;
  font-size: 1.8rem;
  @media screen and (min-width: 769px) {
    &::before {
      content: '';
      position: absolute;
      width: 0;
      top: 2.5rem;
      left: 0;
      height: 0.4rem;
      background-color: var(--main-light-color);
      transition: 0.3s ease-in-out;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
`
