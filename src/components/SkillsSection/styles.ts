import styled from 'styled-components'

export const SkillsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media screen and (min-width: 769px) {
    margin: 4rem auto;
    max-width: 80%;
  }
`

export const SkillCard = styled.li`
  max-width: 15rem;
  width: 100%;
  padding: 2rem 1.5rem 1rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--cards-background-color);
  box-shadow: 0.4rem 0.4rem 1.5rem rgba(0, 0, 0, var(--shadow-opacity));
`
export const TechName = styled.h3`
  margin: 1rem 0 1rem;
  text-align: center;
`
