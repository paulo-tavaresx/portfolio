import styled from 'styled-components'

export const ProjectCard = styled.li`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  padding: 2rem 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 0.4rem 0.4rem 1.5rem rgba(0, 0, 0, var(--shadow-opacity));
  @media screen and (min-width: 730px) {
    flex-direction: row;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }

  @media screen and (min-width: 1000px) {
    align-self: start;
    &:nth-child(even) {
      align-self: flex-end;
    }
  }
`
export const ProjectName = styled.h4`
  font-size: 2rem;
`
export const ProjectDescription = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  max-width: 40rem;
`
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
