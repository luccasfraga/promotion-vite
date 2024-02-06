import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width:  ${props => props.theme.sizeDesktop}) {
    grid-template-columns: 300px 1fr;
  }
`