import { Icon } from '../icon'
import * as Styled from './styles'

type Props = {
  className: string
  target: string
  link: string
  width?: number
}

export const IconLink = ({ className, link, target, width }: Props) => {
  return (
    <Styled.Link href={link} target={target}>
      <Icon width={width} className={className} />
    </Styled.Link>
  )
}
