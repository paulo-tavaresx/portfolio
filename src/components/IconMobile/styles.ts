import styled, { css } from 'styled-components'

type lineType = {
  isOpen: boolean
}

export const isActive = () => css`
  background-color: transparent;

  &::before {
    transform: rotate(45deg);
    top: 10px;
  }

  &::after {
    transform: rotate(-45deg);
    top: 10px;
  }
`

export const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 25px;
  position: relative;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`
export const Line = styled.div<lineType>`
  background-color: var(--font-light-color);
  width: 3rem;
  height: 0.5rem;
  border-radius: 0.3rem;
  transition: 0.4s;

  &::before,
  &::after {
    content: '';
    background-color: var(--font-light-color);
    width: 3rem;
    height: 0.5rem;
    border-radius: 0.3rem;
    position: absolute;
    transition: 0.4s;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }

  ${({ isOpen }) => css`
    ${isOpen && isActive()}
  `}
`
