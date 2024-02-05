import styled from 'styled-components'

export const AsideContent = styled.aside`
  display: flex;
  width: 300px;
  height: 100vh;
  border-right: 1px solid;
  border-color: ${props => props.theme['gray-100']};
  color: ${props => props.theme['gray-800']};
`