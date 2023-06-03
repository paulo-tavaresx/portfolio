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
  background-color: white;
  width: 3rem;
  height: 0.5rem;
  border-radius: 0.3rem;
  transition: 0.4s;

  &::before {
    content: '';
    background-color: white;
    width: 3rem;
    height: 0.5rem;
    border-radius: 0.3rem;
    position: absolute;
    top: 0;
    transition: 0.4s;
  }

  &::after {
    content: '';
    background-color: white;
    width: 3rem;
    height: 0.5rem;
    border-radius: 0.3rem;
    position: absolute;
    bottom: 0;
    transition: 0.4s;
  }

  ${({ isOpen }) => css`
    ${isOpen && isActive()}
  `}
`
