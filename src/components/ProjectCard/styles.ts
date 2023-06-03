import styled from 'styled-components'

export const ProjectCard = styled.li`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  padding: 2rem 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 0.4rem 0.4rem 1.5rem rgba(0, 0, 0, var(--shadow-opacity));
  @media screen and (min-width: 930px) {
    flex-direction: row;
    max-width: 86rem;
    width: 100%;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }

  @media screen and (min-width: 1000px) {
    align-self: start;
    &:nth-child(even) {
      align-self: end;
    }
  }
`
export const ProjectName = styled.h3`
  font-size: 2rem;
  text-align: center;
`
export const ProjectDescription = styled.p`
  font-size: 1.8rem;
  padding: 0 2rem;
  flex-grow: 1;
  width: 100%;
  text-align: center;
  max-width: 40rem;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 40rem;
`
