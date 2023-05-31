import styled from 'styled-components'

type Props = {
  className: string
}

const IconTag = styled.i`
  font-size: 4rem;
  color: black;
`

export const Icon = ({ className }: Props) => {
  return <IconTag className={className}></IconTag>
}
