import * as Styled from './styles'

type Props = {
  src: string
  alt?: string
  width?: number
  ratio?: string
  radius?: string
  fit?: boolean
}

export const Imagem = ({ src, alt, width, ratio, radius, fit }: Props) => {
  return (
    <Styled.ImagemContainer width={width} radius={radius} ratio={ratio}>
      <Styled.Imagem
        src={src}
        radius={radius}
        fit={fit}
        ratio={ratio}
        alt={alt}
      />
    </Styled.ImagemContainer>
  )
}
