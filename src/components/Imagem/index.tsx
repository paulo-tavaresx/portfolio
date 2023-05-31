import * as Styled from './styles'

type Props = {
  src: string
  alt?: string
  width?: number
  ratio?: string
}

export const Imagem = ({ src, alt, width, ratio }: Props) => {
  return (
    <Styled.ImagemContainer width={width} ratio={ratio}>
      <Styled.Imagem src={src} ratio={ratio} alt={alt} />
    </Styled.ImagemContainer>
  )
}
