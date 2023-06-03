import styled, { css } from 'styled-components'

type typeButton = {
  radius?: number
  width?: number
  ratio?: string
}

export const ButtonLink = styled.a<typeButton>`
  ${({ radius, width, ratio }) => css`
    width: ${width};
    aspect-ratio: ${ratio};
    border-radius: ${radius + 'rem'};
  `}
  text-decoration:none;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: 400;
  color: inherit;
  border: 0.3rem solid var(--secondary-color);

  @media screen and (min-width: 769px) {
    &:hover {
      transform: scale(1.1);
      background-color: var(--secondary-color);
    }
    transition: 0.2s ease-in-out;
  }
`
