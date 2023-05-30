import styled from 'styled-components'

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
