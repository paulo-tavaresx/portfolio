import { SectionContainerSecondaryColor } from '../SectionContainer'
import { skillsList } from '../../utils/skillsLists'

import * as Styled from './styles'
import { Icon } from '../icon'

type Props = {
  id: string
}

export const SkillsSection = ({ id }: Props) => {
  return (
    <SectionContainerSecondaryColor id={id}>
      <Styled.CategoryTitle>Habilidades</Styled.CategoryTitle>
      <Styled.SkillsContainer>
        {skillsList.map(({ techName, IconClassName }, index) => (
          <Styled.SkillCard key={index}>
            <Icon className={IconClassName}></Icon>
            <Styled.TechName>{techName}</Styled.TechName>
          </Styled.SkillCard>
        ))}
      </Styled.SkillsContainer>
    </SectionContainerSecondaryColor>
  )
}
