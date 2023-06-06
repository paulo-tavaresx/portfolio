import styled, { css } from 'styled-components'

type Props = {
  width?: number
  ratio?: string
  radius?: string
  fit?: boolean
}
export const Imagem = styled.img<Props>`
  width: 100%;
  ${({ ratio, radius, fit }) => css`
    object-fit: ${fit ? 'contain' : 'cover'};
    aspect-ratio: ${ratio};
    border-radius: ${radius + 'rem' ?? 0};
  `}
`

export const ImagemContainer = styled.div<Props>`
  ${({ width, ratio, radius }) => css`
    display: flex;
    background-color: purple;
    flex-shrink: 0;
    max-width: ${width + 'rem' ?? '100%'};
    aspect-ratio: ${ratio};
    border-radius: ${radius + 'rem' ?? 0};
  `}
`
