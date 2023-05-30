import styled, { css } from 'styled-components'

type Props = {
  width?: number
  ratio?: string
}
export const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ImagemContainer = styled.div<Props>`
  ${({ width, ratio }) => css`
    max-width: ${width + 'rem' ?? '100%'};
    aspect-ratio: ${ratio ?? 1};
  `}
`
