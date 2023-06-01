import styled, { css } from 'styled-components'

type Props = {
  width?: number
  ratio?: string
  radius?: string
}
export const Imagem = styled.img<Props>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ ratio, radius }) => css`
    aspect-ratio: ${ratio ?? 1};
    border-radius: ${radius + 'rem' ?? 0};
  `}
`

export const ImagemContainer = styled.div<Props>`
  ${({ width, ratio, radius }) => css`
    max-width: ${width + 'rem' ?? '100%'};
    aspect-ratio: ${ratio ?? 1};
    border-radius: ${radius + 'rem' ?? 0};
  `}
`



