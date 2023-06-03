import styled, { css } from 'styled-components'

type typeNav = {
  isOpen: boolean
}

const setShow = () => css`
  opacity: 1;
  position: absolute;
  transition: opacity 0.5s ease-in-out;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 9rem 3.5rem;
  width: 100vw;
  height: 100vh;
  background-color: inherit;
  &::before {
    width: 100%;
    height: 100%;
    opacity: 0.3;
    z-index: 2;
    background-color: var(--header-color);
  }
`

export const NavLinks = styled.ul<typeNav>`
  list-style-type: none;
  cursor: pointer;
  column-gap: 3.5rem;
  display: none;
  transition: opacity 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    ${({ isOpen }) => css`
      ${isOpen && setShow()}
    `}
  }
  @media screen and (min-width: 769px) {
    display: flex;
  }
`
