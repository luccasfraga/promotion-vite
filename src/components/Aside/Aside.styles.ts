import styled from 'styled-components'

export const AsideContent = styled.aside`
  display: none;
  border-right: 1px solid;
  border-color: ${props => props.theme['gray-100']};
  color: ${props => props.theme['gray-800']};

  @media (min-width:  ${props => props.theme.sizeDesktop}) {
    display: flex;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  width: 100%;
  padding: 30px 40px;

  li {
    margin: 8px 0;
    a {
      color: ${props => props.theme['gray-500']};
      text-decoration: none;
      font-size: 1rem;

      &:hover,&:focus {
        color: ${props => props.theme.hover};
        outline: none;
      } 
    }
  }
`