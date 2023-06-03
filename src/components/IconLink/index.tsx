import { Icon } from '../icon'
import * as Styled from './styles'

type Props = {
  className: string
  target: string
  link: string
  label: string
  width?: number
}

export const IconLink = ({ className, link, target, width, label }: Props) => {
  return (
    <Styled.Link href={link} target={target} aria-label={label}>
      <Icon width={width} className={className} />
    </Styled.Link>
  )
}
