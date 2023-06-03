import { SectionContainer } from '../SectionContainer'
import { skillsList } from '../../utils/skillsLists'

import * as Styled from './styles'
import { Icon } from '../icon'
import { CategoryTitle } from '../CategoryTitle'

type Props = {
  id: string
}

export const SkillsSection = ({ id }: Props) => {
  return (
    <SectionContainer id={id}>
      <CategoryTitle top={2} bottom={3.5} align="center">
        Habilidades
      </CategoryTitle>
      <Styled.SkillsContainer>
        {skillsList.map(({ techName, IconClassName }, index) => (
          <Styled.SkillCard key={index}>
            <Icon width={6} className={IconClassName}></Icon>
            <Styled.TechName>{techName}</Styled.TechName>
          </Styled.SkillCard>
        ))}
      </Styled.SkillsContainer>
    </SectionContainer>
  )
}
